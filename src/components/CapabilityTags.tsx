export function CapabilityTags({ tags }: { tags: string[] }) {
    return (
        <h3>
            {tags.map((tag) => (
                <b key={tag}>{tag}</b>
            ))}
        </h3>
    )
}
