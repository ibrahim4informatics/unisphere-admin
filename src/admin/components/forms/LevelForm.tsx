import React, { useEffect, useState } from 'react';
// import '/src/admin/components/forms/LevelForm.css';

type Field = { id: number; name: string };

const cycles = ['LICENSE', 'MASTER', 'DOCTORATE', 'ENGINEERING', 'CLASSIC'];

export default function LevelForm({ record, onChange }: any) {
  const [fields, setFields] = useState<Field[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
        if (!res.ok) throw new Error('Failed to load fields');
        const data = await res.json();
        setFields(data || []);
      } catch (e: any) {
        setError(e?.message || 'Failed to load fields');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const updateField = (key: string, value: any) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (onChange) onChange(key, value);
  };

  return (
    <div className="form-root">
      <div className="form-row">
        <label className="form-label">Name</label>
        <input
          className="form-input"
          value={form.name}
          onChange={(e) => updateField('name', e.target.value)}
          required
        />
      </div>

      <div className="form-row">
        <label className="form-label">Cycle</label>
        <select
          className="form-select"
          value={form.cycle}
          onChange={(e) => updateField('cycle', e.target.value)}
          required
        >
          <option value="">Select cycle</option>
          {cycles.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <div className="form-row">
        <label className="form-label">Final Level</label>
        <input
          className="form-checkbox"
          type="checkbox"
          checked={!!form.is_final}
          onChange={(e) => updateField('is_final', e.target.checked)}
        />
      </div>

      <div className="form-row">
        <label className="form-label">Field</label>
        {loading && <div className="form-loading">Loading fields...</div>}
        {error && <div className="form-error">{error}</div>}
        {!loading && !error && (
          <select
            className="form-select"
            value={form.field_id}
            onChange={(e) => updateField('field_id', Number(e.target.value))}
            required
          >
            <option value="">Select field</option>
            {fields.map((f) => (
              <option key={f.id} value={f.id}>{f.name}</option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
}