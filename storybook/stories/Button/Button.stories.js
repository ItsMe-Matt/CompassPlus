import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import Button from '.';
import CenterView from '../CenterView';

//IMPORT COMPS FIRST
import LinkCompassCard from '../../../comps/LinkCompassCard';
import SignUpTransitCard from '../../../comps/SignUp/signUpTransitCard';
import TripPlannerTab from '../../../comps/TripPlanner/tripPlannerTab';

import MobileCard from '../../../comps/CompassCardParent/cardManager';
import AddFundsTab from '../../../comps/CompassCardParent/addFunds';
import TransferBalanceTab from '../../../comps/CompassCardParent/transferFunds';

import NotificationCard from '../../../comps/Profile/notificationCard';
import SupportCard from '../../../comps/Profile/supportCard';
import ProfileCard from '../../../comps/Profile/profileCard';
import ProfileScreen from '../../../comps/Profile/ProfileScreen';
import ProfileCardUpdate from '../../../comps/Profile/ProfileCardUpdate';
import NotificationPreferences from '../../../comps/Profile/NotificationPreferences';
import BalanceHistoryCard from '../../../comps/BalanceHistory/BalanceHistoryCard';
import TicketTab from '../../../comps/CompassCardParent/ticketSelTab';
import AmountTab from '../../../comps/CompassCardParent/amountSelTab';
import PaymentTab from '../../../comps/CompassCardParent/paymentSelTab';

//SCREENS
import PickDestinations from '../../../screens/SignUp/pickDestinations';
import PasswordChange from '../../../comps/Profile/PasswordChange';
import CompassCardScreen from '../../../screens/CompassCardScreen/mobileCard';
import SignUpTransitCardScroll from '../../../comps/SignUp/signUpTransitCardScroll';
import WhiteButton from '../../../comps/Global/whiteButton';
import HomeCard from '../../../comps/Home/homeCard';

//ADD COMPS IN STORYBOOK BELOW LIKE THIS
storiesOf('Comps', module)
  //USUALLY GOES .add('label', () => <Comp />)
  .add('Add Compass Card', () => <LinkCompassCard />)
  .add('Mobile Card', () => <MobileCard />)
  .add('Add Funds Tab', () => <AddFundsTab />)
  .add('Transfer Balance Tab', () => <TransferBalanceTab />)
  .add('Notification Card', () => <NotificationCard />)
  .add('Support Card', () => <SupportCard />)
  .add('Profile Card', () => <ProfileCard />)
  .add('Notification Preferences', () => <NotificationPreferences />)
  .add('Balance History Card', () => <BalanceHistoryCard />)
  .add('Ticket Tabs', () => <TicketTab />)
  .add('Amount Tabs', () => <AmountTab />)
  .add('Payment Tabs', () => <PaymentTab />)
  .add('Pick Destinations', () => <PickDestinations />)
  .add('Change Password', () => <PasswordChange />)
  .add('Compass Card Screen', () => <CompassCardScreen />)
  .add('Sign Up - Transit Card Scroll', () => <SignUpTransitCardScroll />)
  .add('Transit Sign Up Card', () => <SignUpTransitCard />)
  .add('Trip Planner Tab', () => <TripPlannerTab />)
  .add('White Button', () => <WhiteButton />)
  .add('Home Card', () => <HomeCard />)

  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  // .add('with text', () => (
  //   <Button onPress={action('clicked-text')}>
  //     <Text>{text('Button text', 'Hello Button')}</Text>
  //   </Button>
  // ))
  // .add('with some emoji', () => (
  //   <Button onPress={action('clicked-emoji')}>
  //     <Text>😀 😎 👍 💯</Text>
  //   </Button>
  // ));

storiesOf('Screens', module)
  //USUALLY GOES .add('label', () => <Comp />)
  .add('Profile Card Update', () => <ProfileCardUpdate />)
  .add('Profile Screen', () => <ProfileScreen />)
  .add('Pick Destinations', () => <PickDestinations />)

  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
