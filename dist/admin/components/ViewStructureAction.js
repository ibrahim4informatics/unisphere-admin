import React, { useEffect, useState } from 'react';
import { Box, H1, Text, Button, Loader } from '@adminjs/design-system';
import { ChevronDown, ChevronRight } from 'react-feather';
const styles = {
    container: {
        background: '#fff',
        borderRadius: '8px',
        padding: '20px',
        border: '1px solid #e6edf3',
    },
    node: {
        padding: '6px 0',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        color: '#2d3748',
    },
    nodeBtn: {
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
    },
    nodeSpacer: {
        display: 'inline-block',
        width: '16px',
        height: '16px',
    },
    count: {
        marginLeft: '8px',
        background: '#eef2f6',
        padding: '2px 6px',
        borderRadius: '4px',
        fontWeight: 700,
    },
};
const levelStyles = {
    0: { marginLeft: 0, fontWeight: 700 },
    1: { marginLeft: 18, fontWeight: 600 },
    2: { marginLeft: 36, fontWeight: 500 },
    3: { marginLeft: 54, fontWeight: 500 },
    4: { marginLeft: 72, fontWeight: 500 },
    5: { marginLeft: 90, fontWeight: 500 },
    6: { marginLeft: 108, fontWeight: 500 },
};
export default function ViewStructureAction({ record }) {
    const [structure, setStructure] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const universityId = record?.params?.id;
    useEffect(() => {
        if (!universityId) {
            setLoading(false);
            return;
        }
        (async () => {
            try {
                const res = await fetch(`/api/hierarchy/structure/${universityId}`);
                if (!res.ok)
                    throw new Error('Failed to load');
                const data = await res.json();
                setStructure(data);
            }
            catch (e) {
                setError(e?.message || 'Failed');
                setStructure(null);
            }
            finally {
                setLoading(false);
            }
        })();
    }, [universityId]);
    if (loading) {
        return (React.createElement(Box, { style: styles.container },
            React.createElement(Loader, null),
            React.createElement(Text, { mt: "lg" }, "Loading structure...")));
    }
    if (error) {
        return (React.createElement(Box, { style: styles.container },
            React.createElement(Text, null, error)));
    }
    if (!structure) {
        return (React.createElement(Box, { style: styles.container },
            React.createElement(Text, null, "No structure")));
    }
    const NodeView = ({ node, level = 0 }) => {
        const [open, setOpen] = useState(level < 2);
        const hasChildren = node.children && node.children.length > 0;
        return (React.createElement("div", null,
            React.createElement("div", { style: { ...styles.node, marginLeft: levelStyles[level]?.marginLeft ?? 0 } },
                React.createElement("button", { type: "button", style: styles.nodeBtn, onClick: () => setOpen(!open) }, hasChildren ? (open ? React.createElement(ChevronDown, { size: 16 }) : React.createElement(ChevronRight, { size: 16 })) : (React.createElement("span", { style: styles.nodeSpacer }))),
                React.createElement(Text, { style: levelStyles[level] ?? levelStyles[6] }, node.name),
                node.count > 0 && React.createElement(Text, { style: styles.count }, node.count)),
            open && hasChildren && node.children.map((c) => React.createElement(NodeView, { key: c.id, node: c, level: level + 1 }))));
    };
    return (React.createElement(Box, { style: styles.container },
        React.createElement(H1, null,
            record?.params?.name,
            " \u2014 Full Structure"),
        React.createElement(Text, { color: "grey100", mb: "lg" }, "Interactive tree of the subtree."),
        React.createElement(Box, null,
            React.createElement(NodeView, { node: structure, level: 0 })),
        React.createElement(Box, { mt: "lg" },
            React.createElement(Button, { onClick: () => window.location.reload() }, "Close"))));
}
