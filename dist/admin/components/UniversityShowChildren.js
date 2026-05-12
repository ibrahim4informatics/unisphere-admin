import React, { useEffect, useState } from 'react';
import { Box, H1, Table, Text, Button } from '@adminjs/design-system';
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
export default function UniversityShowChildren({ record }) {
    const [faculties, setFaculties] = useState([]);
    const [loading, setLoading] = useState(true);
    const universityId = record?.params?.id;
    useEffect(() => {
        if (!universityId) {
            setLoading(false);
            return;
        }
        (async () => {
            try {
                const res = await fetch(`/api/hierarchy/university/${universityId}/faculties`);
                const data = await res.json();
                setFaculties(data || []);
            }
            catch {
                setFaculties([]);
            }
            finally {
                setLoading(false);
            }
        })();
    }, [universityId]);
    if (loading)
        return React.createElement(Text, null, "Loading faculties...");
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
                        React.createElement("strong", null, "Short Name:")),
                    React.createElement(Text, null, record?.params?.short_name || '-')),
                React.createElement(Box, null,
                    React.createElement(Text, null,
                        React.createElement("strong", null, "Email:")),
                    React.createElement(Text, null, record?.params?.email || '-')),
                React.createElement(Box, null,
                    React.createElement(Text, null,
                        React.createElement("strong", null, "Phone:")),
                    React.createElement(Text, null, record?.params?.phone || '-')),
                React.createElement(Box, null,
                    React.createElement(Text, null,
                        React.createElement("strong", null, "City:")),
                    React.createElement(Text, null, record?.params?.city || '-')),
                React.createElement(Box, null,
                    React.createElement(Text, null,
                        React.createElement("strong", null, "Website:")),
                    React.createElement(Text, null, record?.params?.website ? (React.createElement("a", { href: record.params.website, target: "_blank", rel: "noreferrer" }, record.params.website)) : '-')),
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
            React.createElement(H1, null,
                "Faculties (",
                faculties.length,
                ")"),
            faculties.length === 0 && React.createElement(Text, null, "No faculties found."),
            faculties.length > 0 && (React.createElement(Table, { style: styles.table },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", { style: styles.th }, "Name"),
                        React.createElement("th", { style: styles.th }, "Code"),
                        React.createElement("th", { style: styles.th }, "Departments"),
                        React.createElement("th", { style: styles.th }, "Created"))),
                React.createElement("tbody", null, faculties.map((f) => {
                    return (React.createElement("tr", { key: f.id },
                        React.createElement("td", { style: styles.td },
                            React.createElement("strong", null, f.name)),
                        React.createElement("td", { style: styles.td }, f.code || '-'),
                        React.createElement("td", { style: styles.td }, f._count?.departments ?? 0),
                        React.createElement("td", { style: styles.td }, f.created_at ? new Date(f.created_at).toLocaleDateString() : '-')));
                })))),
            React.createElement(Box, { mt: "lg" },
                React.createElement(Button, { as: "a", href: `http://localhost:5050/admin/resources/Faculty?page=1&filters.university=${record?.id}` }, "Manage Faculties")))));
}
