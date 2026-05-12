import React, { useEffect, useState } from 'react';
const academicSystems = ['ENG', 'LMD', 'CLASSIC'];
const styles = {
    root: { display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 640 },
    row: { display: 'flex', flexDirection: 'column', gap: 6 },
    label: { fontWeight: 600, color: '#2d3748' },
    input: {
        padding: '8px 10px',
        border: '1px solid #e2e8f0',
        borderRadius: 6,
        fontSize: 14,
    },
    select: {
        padding: '8px 10px',
        border: '1px solid #e2e8f0',
        borderRadius: 6,
        fontSize: 14,
    },
    loading: { color: '#4a5568', fontSize: 13 },
    error: { color: '#b91c1c', fontSize: 13 },
};
export default function FieldForm({ record, onChange }) {
    const [departments, setDepartments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [form, setForm] = useState({
        name: record?.params?.name || '',
        code: record?.params?.code || '',
        academic_system: record?.params?.academic_system || '',
        department_id: record?.params?.department_id || '',
    });
    useEffect(() => {
        setForm({
            name: record?.params?.name || '',
            code: record?.params?.code || '',
            academic_system: record?.params?.academic_system || '',
            department_id: record?.params?.department_id || '',
        });
    }, [record]);
    useEffect(() => {
        (async () => {
            try {
                const res = await fetch('/api/departments');
                if (!res.ok)
                    throw new Error('Failed to load departments');
                const data = await res.json();
                setDepartments(data || []);
            }
            catch (e) {
                setError(e?.message || 'Failed to load departments');
            }
            finally {
                setLoading(false);
            }
        })();
    }, []);
    const updateField = (key, value) => {
        setForm((prev) => ({ ...prev, [key]: value }));
        onChange?.(key, value);
    };
    return (React.createElement("div", { style: styles.root },
        React.createElement("div", { style: styles.row },
            React.createElement("label", { style: styles.label }, "Name"),
            React.createElement("input", { style: styles.input, value: form.name, onChange: (e) => updateField('name', e.target.value), required: true })),
        React.createElement("div", { style: styles.row },
            React.createElement("label", { style: styles.label }, "Code"),
            React.createElement("input", { style: styles.input, value: form.code, onChange: (e) => updateField('code', e.target.value), required: true })),
        React.createElement("div", { style: styles.row },
            React.createElement("label", { style: styles.label }, "Academic System"),
            React.createElement("select", { style: styles.select, value: form.academic_system, onChange: (e) => updateField('academic_system', e.target.value), required: true },
                React.createElement("option", { value: "" }, "Select system"),
                academicSystems.map((sys) => (React.createElement("option", { key: sys, value: sys }, sys))))),
        React.createElement("div", { style: styles.row },
            React.createElement("label", { style: styles.label }, "Department"),
            loading && React.createElement("div", { style: styles.loading }, "Loading departments..."),
            error && React.createElement("div", { style: styles.error }, error),
            !loading && !error && (React.createElement("select", { style: styles.select, value: form.department_id, onChange: (e) => updateField('department_id', e.target.value), required: true },
                React.createElement("option", { value: "" }, "Select department"),
                departments.map((d) => (React.createElement("option", { key: d.id, value: d.id }, d.name))))))));
}
