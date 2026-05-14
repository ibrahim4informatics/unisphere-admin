import React, { useEffect, useState, useRef } from "react";
import Select from "react-select";
export default function MultiFieldSelect(props) {
    const { record, property, onChange } = props;
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(false);
    const timeoutRef = useRef(null);
    const existingFields = Object.entries(record.params || {})
        .filter(([key]) => key.startsWith("fields."))
        .map(([, value]) => Number(value))
        .filter((v) => !isNaN(v));
    const [items, setItems] = useState(existingFields);
    useEffect(() => {
        setItems(existingFields);
    }, [record.params]);
    const fetchFields = async (search = "") => {
        setLoading(true);
        try {
            const res = await fetch(`http://localhost:5050/api/fields?name=${encodeURIComponent(search)}`);
            const data = await res.json();
            const formatted = data.map((f) => ({
                value: f.id,
                label: `${f.name} — ${f.department.name} — ${f.department.university.name}`,
                university: f.department.university.name,
            }));
            setOptions(formatted);
        }
        finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchFields();
    }, []);
    const handleSearch = (input) => {
        if (timeoutRef.current)
            clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            fetchFields(input);
        }, 400);
    };
    const addItem = () => {
        const updated = [...items, 0];
        setItems(updated);
        onChange(property.name, updated);
    };
    const updateItem = (index, value) => {
        const updated = [...items];
        updated[index] = value || 0;
        setItems(updated);
        onChange(property.name, updated);
    };
    return (React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12, marginTop: 12, marginBottom: 12 } },
        items.map((value, index) => {
            const selected = options.find((o) => o.value === value) || null;
            return (React.createElement("div", { key: index, style: {
                    display: "flex",
                    gap: 10,
                    margin: "12px 0",
                    alignItems: "center",
                } },
                React.createElement(Select, { value: selected, options: options, isLoading: loading, isSearchable: true, isClearable: true, placeholder: "Select field...", onInputChange: handleSearch, onChange: (val) => updateItem(index, val ? val.value : null), styles: {
                        container: (base) => ({
                            ...base,
                            flex: 1,
                        }),
                        control: (base) => ({
                            ...base,
                            borderRadius: 10,
                            minHeight: 40,
                        }),
                    } })));
        }),
        React.createElement("button", { type: "button", onClick: addItem, style: {
                padding: "8px 12px",
                borderRadius: 8,
                border: "1px solid #e2e8f0",
                background: "#f8fafc",
                cursor: "pointer",
                fontWeight: 600,
            } }, "+ Add Field")));
}
