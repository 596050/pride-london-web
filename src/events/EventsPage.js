import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from '../components/helmet'
import { colors } from '../theme/colors'
import { Button } from '../components/button'
import { Container, Row } from '../components/grid'
import EventsContext from '../contexts/eventsContext'
import { filterByLimit } from '../events/helpers'
import constants from '../constants'
import GroupedEventsCards from './GroupedEventsCards'
import { EventsPageBanner } from './EventsPageBanner'
import {
  ColumnPagination,
  ListingCardWrapper,
  Background,
  EventCount,
} from './EventsPage.styles'

const EventsPage = ({
  data: {
    diageo,
    file: { childImageSharp },
  },
}) => {
  const events = useContext(EventsContext)
  const [numberOfEventsToShow, setNumberOfEventsToShow] = useState(
    constants.itemsToLoad - 1
  )
  return (
    <>
      <Helmet
        title="Coming Out"
        description="The new way to find the best queer events for the queer community from Pride in London"
      />
      <EventsPageBanner
        title="Coming Out"
        subtitle=" The new way to find the best queer events for the queer community from Pride in London."
        backgroundColor={colors.mexicanPink}
        image={childImageSharp}
        sponsor={diageo.childImageSharp}
      />
      <Background>
        <Container paddingTop={{ default: 0, md: '60px' }}>
          <Row>
            <ListingCardWrapper>
              {events
                .filter(filterByLimit, numberOfEventsToShow)
                .map((event, index, filteredEvents) => (
                  <GroupedEventsCards
                    prevEvent={filteredEvents[index - 1]}
                    index={index}
                    event={event}
                    key={event.node.id + event.node.startTime}
                    toLoad={numberOfEventsToShow}
                  />
                ))}
            </ListingCardWrapper>
            <ColumnPagination width={1}>
              <EventCount>{`You're viewing ${numberOfEventsToShow} of ${events.length} events`}</EventCount>
              {numberOfEventsToShow < events.length && (
                <Button
                  onClick={() => {
                    const next = numberOfEventsToShow + constants.itemsToLoad
                    setNumberOfEventsToShow(
                      next > events.length ? events.length : next
                    )
                  }}
                  disabled={numberOfEventsToShow >= events.length}
                  width={{ default: '100%', md: 'auto' }}
                  variant="outline-white"
                >
                  Show more events
                </Button>
              )}
            </ColumnPagination>
          </Row>
        </Container>
      </Background>
    </>
  )
}

EventsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default EventsPage