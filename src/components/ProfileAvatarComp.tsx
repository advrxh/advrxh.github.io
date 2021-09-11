/*
    src\components\ProfileAvatarComp.tsx
        avatar profile component
    Author: AadilVarsh
    Github: https://github.com/AadilVarsh/
    Twitter: https://twitter.com/aadilvarsh
    Date: 10 September 2021
*/

// PACKAGE IMPORTS
import React from "react"

import { Avatar, Grid, Link } from "@material-ui/core";

// LOCAL IMPORTS
import ProfileAvatarCompStyle from "../styles/compStyles/ProfileAvatarComp.style";

// CONSTANTS

// MAIN

function ProfileAvatarComp() {
    const style = ProfileAvatarCompStyle();

    return (
        <React.Fragment>
            <Grid item container
                xl={3}
                lg={2}
                md={4}
                sm={6}
                xs={8}
                justifyContent="center"
                className={style.avatarCon}
            >
                <Link href="https://aadilvarsh.github.io/website" target="_blank">
                    <Avatar src="https://aadilvarsh.github.io/website/images/pfp.png" alt="pfp" className={style.avatar} />
                </Link>
            </Grid>
        </React.Fragment>
    )
}

export default ProfileAvatarComp;