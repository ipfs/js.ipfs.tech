import React from 'react'

import Layout from 'shared/components/layout'
import ScreenSizeProvider from 'shared/components/screen-size-provider'
import Hero from 'shared/components/hero-section'
import Features from 'shared/components/features-section'
import GettingStarted from 'shared/components/getting-started-section'
// import WhatYouCanBuild from 'shared/components/what-you-can-build-section'
import WhatArePeopleBuilding from 'shared/components/what-are-people-building-section'
import Gateway from 'shared/components/gateway-section'
import PublicationsAndTalks from 'shared/components/publications-and-talks-section'
import Community from 'shared/components/community-section'

export default ({ pageContext }) => {
  return (
    <Layout intlInfo={ pageContext }>
      <ScreenSizeProvider>
        <Hero />
        <Features />
        <GettingStarted />
        <Gateway />
        <WhatArePeopleBuilding />
        { /* <WhatYouCanBuild /> */ }
        <PublicationsAndTalks />
        <Community />
      </ScreenSizeProvider>
    </Layout>
  )
}
