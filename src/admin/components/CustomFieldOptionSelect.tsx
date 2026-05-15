import React, { useEffect, useState, useRef } from "react"
import Select from "react-select"

type Field = {
    id: number
    name: string
    department: {
        name: string
        university: {
            name: string
        }
    }
}

type Option = {
    value: number
    label: string
    university: string
}

export default function MultiFieldSelect(props) {
    const { record, property, onChange } = props

    const [options, setOptions] = useState<Option[]>([])
    const [loading, setLoading] = useState(false)

    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    // 🔥 extract existing fields from AdminJS record
    const existingFields = Object.entries(record.params || {})
        .filter(([key]) => key.startsWith("fields."))
        .map(([, value]) => Number(value))
        .filter((v) => !isNaN(v))

    const [items, setItems] = useState<number[]>(existingFields)

    // sync when record changes
    useEffect(() => {
        setItems(existingFields)
    }, [record.params])

    // fetch API
    const fetchFields = async (search = "") => {
        setLoading(true)

        try {
            const res = await fetch(
                `/api/fields?name=${encodeURIComponent(search)}`
            )

            const data: Field[] = await res.json()

            const formatted: Option[] = data.map((f) => ({
                value: f.id,
                label: `${f.name} — ${f.department.name} — ${f.department.university.name}`,
                university: f.department.university.name,
            }))

            setOptions(formatted)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchFields()
    }, [])

    const handleSearch = (input: string) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)

        timeoutRef.current = setTimeout(() => {
            fetchFields(input)
        }, 400)
    }

    // ➕ add new select
    const addItem = () => {
        const updated = [...items, 0]
        setItems(updated)

        onChange(property.name, updated)
    }

    // ✏️ update one select
    const updateItem = (index: number, value: number | null) => {
        const updated = [...items]
        updated[index] = value || 0

        setItems(updated)

        // 🔥 THIS IS THE IMPORTANT PART
        onChange(property.name, updated)
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 12, marginBottom: 12 }}>

            {/* ITEMS */}
            {items.map((value, index) => {
                const selected = options.find((o) => o.value === value) || null

                return (
                    <div
                        key={index}
                        style={{
                            display: "flex",
                            gap: 10,
                            margin: "12px 0",
                            alignItems: "center",
                        }}
                    >
                        <Select
                            value={selected}
                            options={options}
                            isLoading={loading}
                            isSearchable
                            isClearable
                            placeholder="Select field..."
                            onInputChange={handleSearch}
                            onChange={(val) =>
                                updateItem(index, val ? val.value : null)
                            }
                            styles={{
                                container: (base) => ({
                                    ...base,
                                    flex: 1,
                                }),
                                control: (base) => ({
                                    ...base,
                                    borderRadius: 10,
                                    minHeight: 40,
                                }),
                            }}
                        />
                    </div>
                )
            })}

            {/* ADD BUTTON */}
            <button
                type="button"
                onClick={addItem}
                style={{
                    padding: "8px 12px",
                    borderRadius: 8,
                    border: "1px solid #e2e8f0",
                    background: "#f8fafc",
                    cursor: "pointer",
                    fontWeight: 600,
                }}
            >
                + Add Field
            </button>
        </div>
    )
}