import React from 'react'
import { Box, H1, Text, Link } from '@adminjs/design-system'

const card: React.CSSProperties = {
    background: '#fff',
    padding: 16,
    borderRadius: 10,
    border: '1px solid #e6edf3',
    marginBottom: 16,
}

export default function PostShow({ record }: any) {
    const post = record?.params?.full

    if (!post) return <Text>Loading...</Text>

    return (
        <Box>

            {/* POST HEADER */}
            <Box style={card}>
                <H1>Post #{post.id}</H1>

                <Text><strong>Type:</strong> {post.type}</Text>

                <Text>
                    <strong>Author:</strong>{' '}
                    <Link href={`/admin/resources/User/records/${post.author.id}/show`}>
                        {post.author.email}
                    </Link>
                </Text>

                <Text><strong>Created:</strong> {new Date(post.created_at).toLocaleString()}</Text>
            </Box>

            {/* CONTENT */}
            <Box style={card}>
                <H1>Content</H1>
                <Text>{post.content}</Text>
            </Box>

            {/* MEDIA */}
            <Box style={card}>
                <H1>Media ({post.postMedias.length})</H1>

                {post.postMedias.length === 0 && <Text>No media</Text>}

                {post.postMedias.map((m: any) => (
                    <Box key={m.id} style={{ marginBottom: 10 }}>
                        <Text>{m.type}</Text>

                        {m.type.startsWith('IMAGE') && (
                            <img src={m.url} style={{ maxWidth: 200, borderRadius: 8 }} />
                        )}

                        {m.type.startsWith('VIDEO') && (
                            <video src={m.url} controls style={{ maxWidth: 300 }} />
                        )}
                    </Box>
                ))}
            </Box>

            {/* LIKES */}
            <Box style={card}>
                <H1>Likes ({post.likes.length})</H1>

                {post.likes.map((l: any) => (
                    <Text key={l.id}>
                        ❤️ {l.user.email}
                    </Text>
                ))}
            </Box>

            {/* COMMENTS */}
            <Box style={card}>
                <H1>Comments ({post.comments.length})</H1>

                {post.comments.map((c: any) => (
                    <Box key={c.id} style={{ marginBottom: 10 }}>
                        <Text>
                            <strong>{c.author.email}:</strong> {c.content}
                        </Text>
                    </Box>
                ))}
            </Box>

        </Box>
    )
}