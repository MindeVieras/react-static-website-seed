
import React from 'react'
import MetaTags from 'react-meta-tags'

const About = () => {
    return (
        <div>
            <MetaTags>
                <title>Page 1</title>
                <meta name="description" content="Some description." />
                <meta property="og:title" content="MyApp" />
                <meta property="og:image" content="path/to/image.jpg" />
            </MetaTags>
            About us page
        </div>
    )
}

export default About
