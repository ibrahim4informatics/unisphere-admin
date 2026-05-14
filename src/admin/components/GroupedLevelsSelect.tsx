import React, { CSSProperties, useEffect, useState } from 'react'

const styles: {
    wrapper: CSSProperties
    fieldCard: CSSProperties
    fieldHeader: CSSProperties
    levelsGrid: CSSProperties
    levelCard: CSSProperties
    levelSelected: CSSProperties
    levelName: CSSProperties
    levelMeta: CSSProperties
} = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
    },

    fieldCard: {
        border: '1px solid #e5e7eb',
        borderRadius: 12,
        padding: 16,
        background: '#fff',
        boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
    },

    fieldHeader: {
        fontSize: 16,
        fontWeight: 700,
        marginBottom: 12,
        color: '#111827',
    },

    levelsGrid: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 10,
    },

    levelCard: {
        minWidth: 160,
        padding: 10,
        borderRadius: 10,
        border: '1px solid #e5e7eb',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        background: '#f9fafb',
    },

    levelSelected: {
        border: '1px solid #6366f1',
        background: '#eef2ff',
        transform: 'scale(1.02)',
    },

    levelName: {
        fontWeight: 600,
        fontSize: 14,
        color: '#111827',
    },

    levelMeta: {
        fontSize: 12,
        marginTop: 4,
        color: '#6b7280',
    },
}


export default function GroupedLevelsSelect(props) {
    const { record, onChange } = props


    const [data, setData] = useState({})
    const [selected, setSelected] = useState<number[]>([])

    const extractFieldIds = () =>
        [
            ...new Set(
                Object.entries(record.params || {})
                    .filter(([k]) => k.startsWith('fields.'))
                    .map(([, v]) => Number(v))
                    .filter(Boolean)
            )
        ]

    useEffect(() => {
        const levelIds = [
            ...new Set(
                Object.entries(record.params || {})
                    .filter(([key]) => key.startsWith('levels.'))
                    .map(([, value]) => Number(value))
                    .filter(Boolean)
            ),
        ]

        setSelected(levelIds)
    }, [JSON.stringify(record.params)])

    useEffect(() => {
        const fetchData = async () => {
            const ids = extractFieldIds()

            if (!ids.length) {
                setData({})
                return
            }

            const res = await fetch(
                `/api/levels?ids=${JSON.stringify(ids)}`
            )

            const json = await res.json()
            setData(json)
        }

        fetchData()
    }, [record.params])

    const toggle = (id: number) => {
        setSelected((prev) => {
            const exists = prev.includes(id)

            const updated = exists
                ? prev.filter((x) => x !== id)
                : [...prev, id]

            onChange('levels', updated)
            return updated
        })
    }

    return (
        <div style={styles.wrapper}>
            {Object.values(data).map((group: any) => (
                <div key={group.field.id} style={styles.fieldCard}>

                    {/* FIELD HEADER */}
                    <div style={styles.fieldHeader}>
                        {group.field.name} - {group.field.department.university.name}
                    </div>

                    {/* LEVELS GRID */}
                    <div style={styles.levelsGrid}>
                        {group.levels.map((level: any) => {
                            const isSelected = selected.includes(level.id)

                            return (
                                <div
                                    key={level.id}
                                    onClick={() => toggle(level.id)}
                                    style={{
                                        ...styles.levelCard,
                                        ...(isSelected ? styles.levelSelected : {})
                                    }}
                                >
                                    <div style={styles.levelName}>
                                        {level.name}
                                    </div>

                                    <div style={styles.levelMeta}>
                                        {level.cycle}
                                        {level.is_final ? ' • Final' : ''}
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            ))}

        </div>
    )
}


