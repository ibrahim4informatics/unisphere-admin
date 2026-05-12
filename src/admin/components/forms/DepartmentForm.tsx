import React, { useEffect, useState } from 'react';

type Faculty = { id: string; name: string; university_id: string };

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
  hidden: { display: 'none' },
};

export default function DepartmentForm({ record, onChange }: any) {
  const [faculties, setFaculties] = useState<Faculty[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: record?.params?.name || '',
    code: record?.params?.code || '',
    faculty_id: record?.params?.faculty_id || '',
    university_id: record?.params?.university_id || '',
  });

  useEffect(() => {
    setForm({
      name: record?.params?.name || '',
      code: record?.params?.code || '',
      faculty_id: record?.params?.faculty_id || '',
      university_id: record?.params?.university_id || '',
    });
  }, [record]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/faculties');
        if (!res.ok) throw new Error('Failed to load faculties');
        const data = await res.json();
        setFaculties(data || []);
      } catch (e: any) {
        setError(e?.message || 'Failed to load faculties');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const updateField = (key: string, value: any) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    onChange?.(key, value);
  };

  const handleFacultyChange = (value: string) => {
    const selected = faculties.find((f) => f.id === value);
    updateField('faculty_id', value);
    updateField('university_id', selected?.university_id || '');
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
        <label style={styles.label}>Faculty</label>
        {loading && <div style={styles.loading}>Loading faculties...</div>}
        {error && <div style={styles.error}>{error}</div>}
        {!loading && !error && (
          <select
            style={styles.select}
            value={form.faculty_id}
            onChange={(e) => handleFacultyChange(e.target.value)}
            required
          >
            <option value="">Select faculty</option>
            {faculties.map((f) => (
              <option key={f.id} value={f.id}>
                {f.name}
              </option>
            ))}
          </select>
        )}
      </div>

      <input style={styles.hidden} value={form.university_id} readOnly />
    </div>
  );
}