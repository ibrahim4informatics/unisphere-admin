import React, { CSSProperties } from 'react'

const styles: { [key: string]: CSSProperties } = {
    page: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        padding: 20,
    },

    headerCard: {
        background: 'linear-gradient(135deg, #111827, #1f2937)',
        color: 'white',
        padding: 20,
        borderRadius: 14,
        boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
    },

    title: {
        fontSize: 20,
        fontWeight: 700,
        marginBottom: 6,
    },

    subtitle: {
        opacity: 0.8,
        fontSize: 13,
    },

    section: {
        background: '#fff',
        border: '1px solid #e5e7eb',
        borderRadius: 14,
        padding: 16,
        boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
    },

    sectionTitle: {
        fontSize: 14,
        fontWeight: 700,
        marginBottom: 12,
        color: '#111827',
    },

    badgeContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 10,
    },

    badge: {
        padding: '6px 10px',
        borderRadius: 999,
        fontSize: 12,
        fontWeight: 600,
        border: '1px solid #e5e7eb',
        background: '#f9fafb',
        color: '#111827',
    },

    levelBadge: {
        padding: '6px 10px',
        borderRadius: 999,
        fontSize: 12,
        fontWeight: 600,
        background: '#eef2ff',
        border: '1px solid #c7d2fe',
        color: '#4338ca',
    },

    grid: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
    },

    row: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        border: '1px solid #f1f5f9',
        background: '#fafafa',
    },

    label: {
        fontSize: 12,
        color: '#6b7280',
    },

    value: {
        fontSize: 13,
        fontWeight: 600,
        color: '#111827',
    },
}

export default function ModuleShow(props) {
    const { record } = props

    const params = record?.params || {}

    const fields = params.fields || []
    const levels = params.levels || []

    return (
        <div style={styles.page}>

            {/* HEADER */}
            <div style={styles.headerCard}>
                <div style={styles.title}>
                    {params.name}
                </div>
                <div style={styles.subtitle}>
                    Code: {params.code} • ID: {params.id}
                </div>
            </div>

            {/* BASIC INFO */}
            <div style={styles.section}>
                <div style={styles.sectionTitle}>Module Info</div>

                <div style={styles.grid}>
                    <div style={styles.row}>
                        <span style={styles.label}>Created</span>
                        <span style={styles.value}>
                            {new Date(params.created_at).toLocaleString()}
                        </span>
                    </div>

                    <div style={styles.row}>
                        <span style={styles.label}>Updated</span>
                        <span style={styles.value}>
                            {new Date(params.updated_at).toLocaleString()}
                        </span>
                    </div>
                </div>
            </div>

            {/* FIELDS */}
            <div style={styles.section}>
                <div style={styles.sectionTitle}>Fields</div>

                <div style={styles.badgeContainer}>
                    {fields.length === 0 ? (
                        <span style={{ color: '#9ca3af' }}>No fields assigned</span>
                    ) : (
                        fields.map((f) => (
                            <span key={f.id} style={styles.badge}>
                                {f.name} ({f.code})
                            </span>
                        ))
                    )}
                </div>
            </div>

            {/* LEVELS */}
            <div style={styles.section}>
                <div style={styles.sectionTitle}>Levels</div>

                <div style={styles.badgeContainer}>
                    {levels.length === 0 ? (
                        <span style={{ color: '#9ca3af' }}>No levels assigned</span>
                    ) : (
                        levels.map((l) => (
                            <span key={l.id} style={styles.levelBadge}>
                                {l.name} • {l.cycle}{l.is_final ? ' • Final' : ''}
                            </span>
                        ))
                    )}
                </div>
            </div>

        </div>
    )
}