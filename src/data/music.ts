interface Album {
    title: string;
    artist: string;
    releaseGroupId: string;
}

export const previewAlbums: Album[] = [
    {
        title: "Nightmare",
        artist: "Avenged Sevenfold",
        releaseGroupId: "fe4373ed-5e89-46b3-b4c0-31433ce217df",
    },
    {
        title: "August and Everything After",
        artist: "Counting Crows",
        releaseGroupId: "7c2e8889-0050-3b1f-862f-60d1a8f2cf74",
    },
    {
        title: "No Snake",
        artist: "Kings of the City",
        releaseGroupId: "f7dc0e91-4e58-4efa-82e4-5ae07f69d08d",
    },
    {
        title: "The Lioness",
        artist: "Songs: Ohia",
        releaseGroupId: "06162ecb-7f0e-3dcc-8391-aa3aadbbb330",
    },
    {
        title: "Red Apple Falls",
        artist: "Smog",
        releaseGroupId: "25d0b476-3965-35e1-b49b-09ef1beebc11",
    },
    {
        title: "Pink Moon",
        artist: "Nick Drake",
        releaseGroupId: "740ec10a-e887-38a6-a04d-fe2069c9e2a7",
    },
    {
        title: "Third Eye Blind",
        artist: "Third Eye Blind",
        releaseGroupId: "2ccf437c-9b4e-35f5-98d6-812b08c8ac43",
    },
    {
        title: "Группа крови",
        artist: "Кино",
        releaseGroupId: "7ff1eff0-a8c8-37dc-807e-eea5a9e173b5"
    }

]

export function coverUrl(releaseGroupId: string) {
    return `https://coverartarchive.org/release-group/${releaseGroupId}/front-250`;
}
