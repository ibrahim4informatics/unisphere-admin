import React, { useEffect, useState } from 'react';
const cycles = ['LICENSE', 'MASTER', 'DOCTORATE', 'ENGINEERING', 'CLASSIC'];
export default function LevelForm({ record, onChange }) {
    const [fields, setFields] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [form, setForm] = useState({
        name: record?.params?.name || '',
        cycle: record?.params?.cycle || '',
        is_final: record?.params?.is_final || false,
        field_id: record?.params?.field_id || '',
    });
    useEffect(() => {
        setForm({
            name: record?.params?.name || '',
            cycle: record?.params?.cycle || '',
            is_final: record?.params?.is_final || false,
            field_id: record?.params?.field_id || '',
        });
    }, [record]);
    useEffect(() => {
        (async () => {
            try {
                const res = await fetch('/api/fields');
                if (!res.ok)
                    throw new Error('Failed to load fields');
                const data = await res.json();
                setFields(data || []);
            }
            catch (e) {
                setError(e?.message || 'Failed to load fields');
            }
            finally {
                setLoading(false);
            }
        })();
    }, []);
    const updateField = (key, value) => {
        setForm((prev) => ({ ...prev, [key]: value }));
        if (onChange)
            onChange(key, value);
    };
    return (React.createElement("div", { className: "form-root" },
        React.createElement("div", { className: "form-row" },
            React.createElement("label", { className: "form-label" }, "Name"),
            React.createElement("input", { className: "form-input", value: form.name, onChange: (e) => updateField('name', e.target.value), required: true })),
        React.createElement("div", { className: "form-row" },
            React.createElement("label", { className: "form-label" }, "Cycle"),
            React.createElement("select", { className: "form-select", value: form.cycle, onChange: (e) => updateField('cycle', e.target.value), required: true },
                React.createElement("option", { value: "" }, "Select cycle"),
                cycles.map((c) => (React.createElement("option", { key: c, value: c }, c))))),
        React.createElement("div", { className: "form-row" },
            React.createElement("label", { className: "form-label" }, "Final Level"),
            React.createElement("input", { className: "form-checkbox", type: "checkbox", checked: !!form.is_final, onChange: (e) => updateField('is_final', e.target.checked) })),
        React.createElement("div", { className: "form-row" },
            React.createElement("label", { className: "form-label" }, "Field"),
            loading && React.createElement("div", { className: "form-loading" }, "Loading fields..."),
            error && React.createElement("div", { className: "form-error" }, error),
            !loading && !error && (React.createElement("select", { className: "form-select", value: form.field_id, onChange: (e) => updateField('field_id', Number(e.target.value)), required: true },
                React.createElement("option", { value: "" }, "Select field"),
                fields.map((f) => (React.createElement("option", { key: f.id, value: f.id }, f.name))))))));
}
