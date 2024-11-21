import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import styled from 'styled-components/native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import Header from '../components/Header';
import MoodTracker from '../components/MoodTracker';
import QuoteCard from '../components/QuoteCard';
import ActivityCard from '../components/ActivityCard';
import MeditationPlayer from '../components/MeditationPlayer';
import SongPlayer from '../components/SongPlayer';
import GameCard from '../components/GameCard';
import { fetchQuote, fetchYogaPose, fetchMeditation, fetchMusic, fetchGame } from '../services/api';

const HomeScreen = () => {
  const [quote, setQuote] = useState(null);
  const [yogaPose, setYogaPose] = useState(null);
  const [meditation, setMeditation] = useState(null);
  const [music, setMusic] = useState(null);
  const [game, setGame] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const [quoteData, yogaData, meditationData, musicData, gameData] = await Promise.all([
        fetchQuote(),
        fetchYogaPose(),
        fetchMeditation(),
        fetchMusic(),
        fetchGame(),
      ]);
      setQuote(quoteData.quote);
      setYogaPose(yogaData.yoga_pose);
      setMeditation(meditationData.meditation);
      setMusic(musicData.music);
      setGame(gameData.game);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Header />
      <ScrollView>
        <Animated.View entering={FadeInUp.delay(100)}>
          <MoodTracker />
        </Animated.View>
        <Animated.View entering={FadeInUp.delay(200)}>
          <QuoteCard quote={quote} />
        </Animated.View>
        <Animated.View entering={FadeInUp.delay(300)}>
          <SectionTitle>Recommended Activities</SectionTitle>
          <ActivityCard title="Yoga" description={yogaPose?.name} />
          <ActivityCard title="Meditation" description={meditation?.title} />
        </Animated.View>
        <Animated.View entering={FadeInUp.delay(400)}>
          <MeditationPlayer meditation={meditation} />
        </Animated.View>
        <Animated.View entering={FadeInUp.delay(500)}>
          <SongPlayer song={music} />
        </Animated.View>
        <Animated.View entering={FadeInUp.delay(600)}>
          <GameCard game={game} />
        </Animated.View>
      </ScrollView>
    </Container>
  );
};

const Container = styled(View)`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
`;

const SectionTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.theme.colors.text};
  margin: 16px;
`;

export default HomeScreen;

