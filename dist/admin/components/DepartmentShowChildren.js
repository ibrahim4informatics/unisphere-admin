import React, { useEffect, useState } from 'react';
import { Box, H1, Text, Button, Link } from '@adminjs/design-system';
const styles = {
    card: {
        background: '#fff',
        borderRadius: 8,
        padding: 16,
        border: '1px solid #e6edf3',
        marginTop: 20,
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
    },
    th: {
        padding: 10,
        borderBottom: '1px solid #eef2f7',
        textAlign: 'left',
        background: '#f7fafc',
    },
    td: {
        padding: 10,
        borderBottom: '1px solid #eef2f7',
        textAlign: 'left',
    },
    badge: {
        padding: '4px 8px',
        borderRadius: 4,
        fontWeight: 600,
        fontSize: 12,
    },
};
export default function DepartmentShowChildren({ record }) {
    const [fields, setFields] = useState([]);
    const [loading, setLoading] = useState(true);
    const departmentId = record?.params?.id;
    useEffect(() => {
        if (!departmentId) {
            setLoading(false);
            return;
        }
        (async () => {
            try {
                const res = await fetch(`/api/hierarchy/department/${departmentId}/fields`);
                const data = await res.json();
                setFields(data || []);
            }
            catch {
                setFields([]);
            }
            finally {
                setLoading(false);
            }
        })();
    }, [departmentId]);
    if (loading)
        return React.createElement(Text, null, "Loading fields...");
    return (React.createElement(Box, null,
        React.createElement(Box, { style: styles.card },
            React.createElement(H1, null, "General Informations"),
            React.createElement(Box, { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12, marginTop: 12 } },
                React.createElement(Box, null,
                    React.createElement(Text, null,
                        React.createElement("strong", null, "Name:")),
                    React.createElement(Text, null, record?.params?.name || '-')),
                React.createElement(Box, null,
                    React.createElement(Text, null,
                        React.createElement("strong", null, "Code:")),
                    React.createElement(Text, null, record?.params?.code || '-')),
                React.createElement(Box, null,
                    React.createElement(Text, null,
                        React.createElement("strong", null, "University:")),
                    React.createElement(Link, { href: `/admin/resources/University/records/${record?.params?.university.id}/show` }, record?.params?.university.name || '-')),
                React.createElement(Box, null,
                    React.createElement(Text, null,
                        React.createElement("strong", null, "Faculty:")),
                    React.createElement(Link, { href: `/admin/resources/Faculty/records/${record?.params?.faculty.id}/show` }, record?.params?.faculty.name || '-')),
                React.createElement(Box, null,
                    React.createElement(Text, null,
                        React.createElement("strong", null, "Created At:")),
                    React.createElement(Text, null, record?.params?.created_at
                        ? new Date(record.params.created_at).toLocaleString()
                        : '-')),
                React.createElement(Box, null,
                    React.createElement(Text, null,
                        React.createElement("strong", null, "Updated At:")),
                    React.createElement(Text, null, record?.params?.updated_at
                        ? new Date(record.params.updated_at).toLocaleString()
                        : '-')))),
        React.createElement(Box, { style: styles.card },
            React.createElement(H1, { variant: "h4" },
                "Fields (",
                fields.length,
                ")"),
            fields.length === 0 && React.createElement(Text, null, "No fields found."),
            fields.length > 0 && (React.createElement("table", { style: styles.table },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", { style: styles.th }, "Name"),
                        React.createElement("th", { style: styles.th }, "Code"),
                        React.createElement("th", { style: styles.th }, "System"),
                        React.createElement("th", { style: styles.th }, "Levels"),
                        React.createElement("th", { style: styles.th }, "Created"))),
                React.createElement("tbody", null, fields.map((f) => {
                    return (React.createElement("tr", { key: f.id },
                        React.createElement("td", { style: styles.td },
                            React.createElement("strong", null, f.name)),
                        React.createElement("td", { style: styles.td }, f.code || '-'),
                        React.createElement("td", { style: styles.td }, f.academic_system || '-'),
                        React.createElement("td", { style: styles.td }, f._count?.levels ?? 0),
                        React.createElement("td", { style: styles.td }, f.created_at ? new Date(f.created_at).toLocaleDateString() : '-')));
                })))),
            React.createElement(Box, { mt: "lg" },
                React.createElement(Button, { as: "a", href: `/admin/resources/Field?page=1&filters.department=${record?.params?.id}` }, "Manage Fields")))));
}
