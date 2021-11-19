import Header from "../containers/header/header";
import Navbar from "../containers/navbar/navbar";
import { getUserInformation } from "../utils/fetch";

export default function Home(p) {
    console.log("#Homepage", p);

    return (
        <>
            <Navbar github={p.PROFILE_LINK} twitter={p.PROFILE_TWITTER} name={p.PROFILE_NAME} />
            <Header
                image={p.PROFILE_PHOTO}
                name={p.PROFILE_NAME}
                location={p.PROFILE_LOCATION}
                bio={p.PROFILE_BIO}
                alt={"Profile Photo"}
                width={200}
                height={200}
            />
        </>
    );
}

export async function getStaticProps() {
    const data = await getUserInformation();

    return {
        props: {
            PROFILE_PHOTO: data.avatar_url,
            PROFILE_NAME: data.name,
            PROFILE_LINK: data.html_url,
            PROFILE_TWITTER: data.twitter_username ? `https://twitter.com/${data.twitter_username}` : null,
            PROFILE_LOCATION: data.location,
            PROFILE_BIO: data.bio,
        },
    };
}
