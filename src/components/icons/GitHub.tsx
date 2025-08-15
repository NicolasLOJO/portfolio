import * as React from "react";
import {useEffect, useState} from "react";
import {useTheme} from "next-themes";
import Image from "next/image";
import GitHubLight from "../../../public/GitHub_light.svg";
import GitHubDark from "../../../public/GitHub_dark.svg";

const GitHub = () => {
    const {resolvedTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div style={{width: 24, height: 24}}/>;
    }

    const src = resolvedTheme === 'dark' ? GitHubDark : GitHubLight;

    return (
        <Image
            src={src}
            alt="GitHub"
            width={24}
            height={24}
        />
    );
}
export default GitHub;
