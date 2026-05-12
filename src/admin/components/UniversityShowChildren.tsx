import React, { useEffect, useState } from 'react';
import { Box, H1, Table, Text, Button } from '@adminjs/design-system';

const styles: Record<string, React.CSSProperties> = {
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

export default function UniversityShowChildren({ record }: { record?: any }) {
    const [faculties, setFaculties] = useState<any[]>([]);
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
            } catch {
                setFaculties([]);
            } finally {
                setLoading(false);
            }
        })();
    }, [universityId]);

    if (loading) return <Text>Loading faculties...</Text>;

    return (
        <Box>

            {/* Info of university */}
            <Box style={styles.card}>
                <H1>General Informations</H1>

                <Box style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12, marginTop: 12 }}>

                    <Box>
                        <Text><strong>Name:</strong></Text>
                        <Text>{record?.params?.name || '-'}</Text>
                    </Box>

                    <Box>
                        <Text><strong>Short Name:</strong></Text>
                        <Text>{record?.params?.short_name || '-'}</Text>
                    </Box>

                    <Box>
                        <Text><strong>Email:</strong></Text>
                        <Text>{record?.params?.email || '-'}</Text>
                    </Box>

                    <Box>
                        <Text><strong>Phone:</strong></Text>
                        <Text>{record?.params?.phone || '-'}</Text>
                    </Box>

                    <Box>
                        <Text><strong>City:</strong></Text>
                        <Text>{record?.params?.city || '-'}</Text>
                    </Box>

                    <Box>
                        <Text><strong>Website:</strong></Text>
                        <Text>
                            {record?.params?.website ? (
                                <a href={record.params.website} target="_blank" rel="noreferrer">
                                    {record.params.website}
                                </a>
                            ) : '-'}
                        </Text>
                    </Box>

                    <Box>
                        <Text><strong>Created At:</strong></Text>
                        <Text>
                            {record?.params?.created_at
                                ? new Date(record.params.created_at).toLocaleString()
                                : '-'}
                        </Text>
                    </Box>

                    <Box>
                        <Text><strong>Updated At:</strong></Text>
                        <Text>
                            {record?.params?.updated_at
                                ? new Date(record.params.updated_at).toLocaleString()
                                : '-'}
                        </Text>
                    </Box>

                </Box>
            </Box>

            <Box style={styles.card}>
                <H1>Faculties ({faculties.length})</H1>
                {faculties.length === 0 && <Text>No faculties found.</Text>}

                {faculties.length > 0 && (
                    <Table style={styles.table}>
                        <thead>
                            <tr>
                                <th style={styles.th}>Name</th>
                                <th style={styles.th}>Code</th>
                                <th style={styles.th}>Departments</th>
                                <th style={styles.th}>Created</th>
                            </tr>
                        </thead>
                        <tbody>
                            {faculties.map((f) => {
                                return (
                                    <tr key={f.id}>
                                        <td style={styles.td}><strong>{f.name}</strong></td>
                                        <td style={styles.td}>{f.code || '-'}</td>
                                        <td style={styles.td}>{f._count?.departments ?? 0}</td>

                                        <td style={styles.td}>{f.created_at ? new Date(f.created_at).toLocaleDateString() : '-'}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                )}

                <Box mt="lg">
                    <Button as="a" href={`http://localhost:5050/admin/resources/Faculty?page=1&filters.university=${record?.id}`}>Manage Faculties</Button>
                </Box>
            </Box>
        </Box>
    );
}