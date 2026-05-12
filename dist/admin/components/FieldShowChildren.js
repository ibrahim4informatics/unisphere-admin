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
        marginRight: 6,
    },
};
export default function FieldShowChildren({ record }) {
    const [levels, setLevels] = useState([]);
    const [loading, setLoading] = useState(true);
    const fieldId = record?.params?.id;
    useEffect(() => {
        if (!fieldId) {
            setLoading(false);
            return;
        }
        (async () => {
            try {
                const res = await fetch(`/api/hierarchy/field/${fieldId}/levels`);
                const data = await res.json();
                setLevels(data || []);
            }
            catch {
                setLevels([]);
            }
            finally {
                setLoading(false);
            }
        })();
    }, [fieldId]);
    if (loading)
        return React.createElement(Text, null, "Loading levels...");
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
                        React.createElement("strong", null, "Academic System:")),
                    React.createElement(Text, null, record?.params?.academic_system || '-')),
                React.createElement(Box, null,
                    React.createElement(Text, null,
                        React.createElement("strong", null, "Department:")),
                    React.createElement(Link, { href: `/admin/resources/Department/records/${record?.params?.department.id}/show` }, record?.params?.department.name || '-')),
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
                "Levels (",
                levels.length,
                ")"),
            levels.length === 0 && React.createElement(Text, null, "No levels found."),
            levels.length > 0 && (React.createElement("table", { style: styles.table },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", { style: styles.th }, "Name"),
                        React.createElement("th", { style: styles.th }, "Cycle"),
                        React.createElement("th", { style: styles.th }, "Badges"),
                        React.createElement("th", { style: styles.th }, "Created"))),
                React.createElement("tbody", null, levels.map((l) => {
                    const active = l.isActive !== false;
                    return (React.createElement("tr", { key: l.id },
                        React.createElement("td", { style: styles.td },
                            React.createElement("strong", null, l.name)),
                        React.createElement("td", { style: styles.td }, l.cycle || '-'),
                        React.createElement("td", { style: styles.td },
                            l.is_final && (React.createElement("span", { style: { ...styles.badge, background: '#dbeafe', color: '#0c4a6e' } }, "Final")),
                            React.createElement("span", { style: {
                                    ...styles.badge,
                                    background: active ? '#ecfdf5' : '#fff1f2',
                                    color: active ? '#065f46' : '#7f1d1d',
                                } }, active ? 'Active' : 'Inactive')),
                        React.createElement("td", { style: styles.td }, l.created_at ? new Date(l.created_at).toLocaleDateString() : '-')));
                })))),
            React.createElement(Box, { mt: "lg" },
                React.createElement(Button, { as: "a", href: `/admin/resources/Level?page=1&filters.field=${record?.params?.id}` }, "Manage Levels"))),
        React.createElement(Box, { style: styles.card },
            React.createElement(H1, null,
                "Modules (",
                record?.params?.modules?.length || 0,
                ")"),
            !record?.params?.modules || record.params.modules.length === 0 ? (React.createElement(Text, null, "No modules found.")) : (React.createElement("table", { style: styles.table },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", { style: styles.th }, "Name"),
                        React.createElement("th", { style: styles.th }, "Code"),
                        React.createElement("th", { style: styles.th }, "Related Fields"),
                        React.createElement("th", { style: styles.th }, "Related Levels"),
                        React.createElement("th", { style: styles.th }, "Courses Count"))),
                React.createElement("tbody", null, record.params.modules.map((m) => (React.createElement("tr", { key: m.id },
                    React.createElement("td", { style: styles.td },
                        React.createElement("strong", null, m.name)),
                    React.createElement("td", { style: styles.td }, m.code || '-'),
                    React.createElement("td", { style: styles.td }, m.fields && m.fields.length > 0 ? (m.fields.map((field) => (React.createElement(Link, { key: field.id, href: `/admin/resources/Field/records/${field.id}/show`, style: { textDecoration: 'none' } },
                        React.createElement("span", { style: {
                                ...styles.badge,
                                background: '#e0f2fe',
                                color: '#075985',
                                marginBottom: 4,
                                display: 'inline-block',
                            } }, field.name))))) : ('-')),
                    React.createElement("td", { style: styles.td }, m.levels && m.levels.length > 0 ? (m.levels.map((level) => (React.createElement(Link, { key: level.id, href: `/admin/resources/Level/records/${level.id}/show`, style: { textDecoration: 'none' } },
                        React.createElement("span", { style: {
                                ...styles.badge,
                                background: '#c1febb',
                                color: '#10a42b',
                                marginBottom: 4,
                                display: 'inline-block',
                            } }, level.name))))) : ('-')),
                    React.createElement("td", { style: styles.td }, m._count?.courses ?? 0))))))),
            React.createElement(Box, { mt: "lg" },
                React.createElement(Button, { as: "a", href: "/admin/resources/Module" }, "Manage Modules")))));
}
