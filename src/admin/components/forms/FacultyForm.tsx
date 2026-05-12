import React, { useEffect, useState } from 'react';

type University = { id: string; name: string };

const styles: Record<string, React.CSSProperties> = {
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

export default function FacultyForm({ record, onChange }: any) {
  const [universities, setUniversities] = useState<University[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: record?.params?.name || '',
    code: record?.params?.code || '',
    university_id: record?.params?.university_id || '',
  });

  useEffect(() => {
    setForm({
      name: record?.params?.name || '',
      code: record?.params?.code || '',
      university_id: record?.params?.university_id || '',
    });
  }, [record]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/universities');
        if (!res.ok) throw new Error('Failed to load universities');
        const data = await res.json();
        setUniversities(data || []);
      } catch (e: any) {
        setError(e?.message || 'Failed to load universities');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const updateField = (key: string, value: any) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    onChange?.(key, value);
  };

  return (
    <div style={styles.root}>
      <div style={styles.row}>
        <label style={styles.label}>Name</label>
        <input
          style={styles.input}
          value={form.name}
          onChange={(e) => updateField('name', e.target.value)}
          required
        />
      </div>

      <div style={styles.row}>
        <label style={styles.label}>Code</label>
        <input
          style={styles.input}
          value={form.code}
          onChange={(e) => updateField('code', e.target.value)}
          required
        />
      </div>

      <div style={styles.row}>
        <label style={styles.label}>University</label>
        {loading && <div style={styles.loading}>Loading universities...</div>}
        {error && <div style={styles.error}>{error}</div>}
        {!loading && !error && (
          <select
            style={styles.select}
            value={form.university_id}
            onChange={(e) => updateField('university_id', e.target.value)}
            required
          >
            <option value="">Select university</option>
            {universities.map((u) => (
              <option key={u.id} value={u.id}>
                {u.name}
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
}