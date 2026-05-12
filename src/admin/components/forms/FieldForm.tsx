import React, { useEffect, useState } from 'react';

type Department = { id: string; name: string };

const academicSystems = ['ENG', 'LMD', 'CLASSIC'];

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

export default function FieldForm({ record, onChange }: any) {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: record?.params?.name || '',
    code: record?.params?.code || '',
    academic_system: record?.params?.academic_system || '',
    department_id: record?.params?.department_id || '',
  });

  useEffect(() => {
    setForm({
      name: record?.params?.name || '',
      code: record?.params?.code || '',
      academic_system: record?.params?.academic_system || '',
      department_id: record?.params?.department_id || '',
    });
  }, [record]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/departments');
        if (!res.ok) throw new Error('Failed to load departments');
        const data = await res.json();
        setDepartments(data || []);
      } catch (e: any) {
        setError(e?.message || 'Failed to load departments');
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
        <label style={styles.label}>Academic System</label>
        <select
          style={styles.select}
          value={form.academic_system}
          onChange={(e) => updateField('academic_system', e.target.value)}
          required
        >
          <option value="">Select system</option>
          {academicSystems.map((sys) => (
            <option key={sys} value={sys}>
              {sys}
            </option>
          ))}
        </select>
      </div>

      <div style={styles.row}>
        <label style={styles.label}>Department</label>
        {loading && <div style={styles.loading}>Loading departments...</div>}
        {error && <div style={styles.error}>{error}</div>}
        {!loading && !error && (
          <select
            style={styles.select}
            value={form.department_id}
            onChange={(e) => updateField('department_id', e.target.value)}
            required
          >
            <option value="">Select department</option>
            {departments.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name}
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
}