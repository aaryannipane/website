import React from 'react'
import Layout from '../../components/layout'
import CDCComparisonContainer from './_CDCComparisonContainer'
import MapContainer from './_MapContainer'
import StateCumulativeTestsContainer from './_StateCumulativeTestsContainer'
import StateCumulativeDeathsContainer from './_StateCumulativeDeathsContainer'
import UsCumulativeDeathsContainer from './_UsCumulativeDeathsContainer'
import UsPositiveAndTotalTestsContainer from './_UsPositiveAndTotalTestsContainer'

import './dashboard.scss'

const DashboardPage = () => {
  return (
    <Layout title="Visual Dashboard">
      <div className="subhead">
        Explore graphics made with the COVID Tracking Project dataset along with
        tips to help you present the data in the clearest and most accurate way
        possible.
      </div>
      <p>
        Testing is a critical part of any public health response. Journalists
        have uncovered evidence that the US government’s COVID-19 testing
        strategy has been delayed and uneven. This hampers our understanding of
        the pandemic and our ability to respond to it effectively. Government
        updates on national testing follow a similar pattern: The Centers for
        Disease Control and Prevention (CDC) currently publishes incomplete data
        that lags several days behind US state and territory reports.
      </p>
      <CDCComparisonContainer />
      <p>
        According to our data, US metropolitan areas have been hit the hardest.
        New York leads the rest of the country in the number of positive cases
        by more than 120,000, followed by New Jersey, Massachusetts, and
        Louisiana.
      </p>
      <p>
        Because COVID-19 testing and reporting are inconsistent among states, it
        &apos;s easy to misinterpret the data. That makes it especially
        important to create clear and accurate visualizations. Otherwise even
        simple and minimalistic graphics can be misleading. If you plan to
        display the data yourself, please closely follow{' '}
        <a href="https://vanschneider.com/a-data-designers-responsibility-during-a-global-crisis">
          design
        </a>{' '}
        and visualization guidelines.
      </p>
      <h4>
        On this page, you will find some tips and suggestions on how to
        responsibly visualize data from the COVID Tracking Project.
      </h4>
      <strong>Consider normalizing the data.</strong>
      <p>
        If you&apos;re creating a{' '}
        <a href="http://seeingdata.org/taketime/inside-the-chart-choropleth-map/">
          choropleth map
        </a>{' '}
        (where each state is shaded in proportion to a statistical variable),
        make sure you encode a population-controlled rate, such as
        &quot;positive tests per one million people.&quot; If you want to show
        absolute numbers, such as the number of new positive cases per day, use
        a{' '}
        <a href="http://seeingdata.org/taketime/inside-the-chart-proportional-symbol-map/">
          symbol map
        </a>
        .
      </p>
      <strong>Choose colors carefully.</strong>
      <p>
        Readers are likely experiencing some latent anxiety, so do your best to
        neither make light of the situation nor be alarmist about it. One
        application of this is in your color choice: You don&apos;t want your
        map&apos;s color scheme or design to minimize the situation by being
        overly playful or lighthearted. You also don&apos;t want to select
        colors that suggest the worst possible outcome.
      </p>
      <MapContainer />
      <strong>Include the denominator.</strong>
      <p>
        Charting the number of positive tests alone is often problematic. Simple
        case counts show where people are being tested, not necessarily where
        people are sick. To illustrate the point, a state that reports three
        cases of COVID-19 after testing 2,000 people is probably in a different
        stage of its outbreak than a state that reports three cases but has only
        tested 20 people. But if all you have is a case count, those states look
        exactly the same. That is why we need to include the total number of
        tests as a denominator.
      </p>
      <UsPositiveAndTotalTestsContainer />
      <strong>Be mindful when comparing states.</strong>
      <p>
        By comparing positive tests to total tests in each state and territory,
        we can get a sense of how widespread a state’s testing regime might be
        (while keeping in mind that{' '}
        <a href="https://www.census.gov/data/tables/2010/dec/density-data-text.html">
          population densities vary widely across the country
        </a>
        ).
      </p>
      <StateCumulativeTestsContainer />
      <strong>Don’t ignore data uncertainty.</strong>
      <p>
        Though this is a national crisis, each US state or territory reports its
        data differently. We track numbers provided by each state, but the
        quality and frequency of{' '}
        <a href="https://covidtracking.com/about-tracker/#data-quality-grade">
          reports vary widely
        </a>
        . Transparency is crucial. Be honest about what is in the data that you
        are charting and what isn’t. Footnotes and annotations can help you make
        these disclaimers. We publish details about inconsistencies in data
        reporting{' '}
        <a href="https://covidtracking.com/data">
          for every state and territory
        </a>
        .
      </p>
      <strong>Use absolute numbers for death counts.</strong>
      <p>
        An organized, collective, and timely response from the government and
        other authorities is a key factor in saving lives. One metric you can
        use to measure the response’s effectiveness is the number of deaths
        attributed to the virus per day and/or per state or territory.
      </p>
      <p>
        We recommend using total numbers for plotting deaths to compare one US
        state or territory against another. In this case, adjusting per capita
        adds a layer of abstraction to the graphic. This reduces the data&apso;s
        power and the reader&apos;s comprehension. It’s easier to picture 200
        fatalities than 0.0001 fatalities per capita, as{' '}
        <a href="https://twitter.com/jburnmurdoch">John Burn-Murdoch</a>, a data
        journalist at the <em>Financial Times</em>, pointed out.
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <UsCumulativeDeathsContainer />
        <StateCumulativeDeathsContainer />
      </div>
      <strong>Remember that even death counts are uncertain.</strong>
      <p>
        Data that tracks COVID-19 death counts is still a gray area. Though some
        experts prefer to measure the pandemic&apos;s severity using the number
        of deaths instead of total cases, several factors could bias COVID-19
        mortality data.
      </p>
      <p>
        There are some concerns that official death statistics may overcount
        COVID-19 fatalities by assuming any patient who tests positive for the
        virus was killed by it. But Marc Lipsitch, a Harvard University
        epidemiologist, told FactCheck.org that &quot;the number of such cases
        will be small.&quot; Undercounting is a bigger problem, he says. &quot;A
        greater issue is errors in the other direction.&quot;
      </p>
      <p>
        If people die from COVID-19 before they are tested, their death might
        not be included in the official tally. For example, a{' '}
        <a href="https://gothamist.com/news/surge-number-new-yorkers-dying-home-officials-suspect-undercount-covid-19-related-deaths">
          WNYC/Gothamist investigation
        </a>{' '}
        found that as of Tuesday, April 7, around 200 New Yorkers had died at
        home every day without access to testing and medical treatment.
        That&apos;s 10 times higher than NYC&apos;s typical at-home death rate.
        These deaths are likely caused by COVID-19. If this effect is widespread
        in the United States, that means official statistics undercount the
        disease’s fatality rate.
      </p>
      <p>
        To get better grounding when interpreting death rates, consider
        comparing COVID-19 mortality rates for a given location since the
        beginning of the outbreak to fatalities during the same period in
        previous years.
      </p>
      <strong>Be clear and honest.</strong>
      <p>
        While news is moving faster than ever to keep up with the pace of the
        pandemic spread, designers and visualization experts&apos; goal is to
        present COVID-19 data in a clear and honest way. Provide context, and
        consider the tips above to avoid common pitfalls in data reporting as we
        seek to inform people during this time of crisis.
      </p>
      <strong>Notes</strong>
      <p>
        We derive the total value by adding together the positive and negative
        value for each state. This is to account for differences in how states
        reporting pending tests
      </p>
      <p>
        We changed the way we report California data on April 1. We synced up
        with the{' '}
        <a href="https://public.tableau.com/views/COVID-19PublicDashboard/Covid-19Public?:embed=y&:display_count=no&:showVizHome=no">
          states&apos;s data dashboard
        </a>
        , whereas previously we had published testing updates from other
        sources. This led to a drop in California&apos;s reported cases and
        deaths in our dataset on April 1, since the state&apos;s data lags
        behind our previous sources.
      </p>
      <p>
        <strong>Source:</strong> The COVID Tracking Project
      </p>
      <p>
        Graphics and development by Jeremia Kimelman,{' '}
        <a href="https://gabeoleary.com/">Gabe O&apos;Leary</a>, Melba Madrigal,
        Vijay Sharwar, Aaron Mullan, Nathan Selikoff, Alice Goldfarb, Jane
        Friedhoff, Norman Wang, Daniel Gilbert
      </p>
      <p>
        Visual editing by <a href="https://julialedur.com.br/">Júlia Ledur</a>
      </p>
      <p>Text editing by Hannah Waters</p>
    </Layout>
  )
}

export default DashboardPage
