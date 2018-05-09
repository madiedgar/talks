import React from "react";
import { Heading, Slide, Text, List, ListItem } from "spectacle";
export default (
  <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
    <Heading size={1} fit caps lineHeight={1} textColor="primary">Creating Your Alumni Wishlist</Heading>
    <List>
      <ListItem>Past organizers of your hackathon</ListItem>
      <ListItem>Hackcon Organizers</ListItem>
      <ListItem>Technologists with specific knowledge</ListItem>
      <ListItem>Technologists from specific company</ListItem>
    </List>
  </Slide>
);
