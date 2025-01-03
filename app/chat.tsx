import { View, ScrollView } from 'react-native';
import * as React from 'react';
import { Text } from '~/components/ui/text';
import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';

export default function Screen() {
  const [messages, setMessages] = React.useState([
    {
      id: 1,
      text: "Bonjour! Comment puis-je vous aider aujourd'hui?",
      sender: 'bot',
    },
    {
      id: 2,
      text: 'Je voudrais en savoir plus sur vos services.',
      sender: 'user',
    },
  ]);
  const [input, setInput] = React.useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([
        ...messages,
        { id: messages.length + 1, text: input, sender: 'user' },
      ]);
      setInput('');
    }
  };

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <ScrollView className="flex-1 mb-4">
        {messages.map((message) => (
          <View
            key={message.id}
            className={`mb-2 ${message.sender === 'user' ? 'items-end' : 'items-start'}`}
          >
            <View
              className={`bg-${message.sender === 'user' ? 'blue-500' : 'gray-300'} p-3 rounded-lg`}
            >
              <Text
                className={`text-${message.sender === 'user' ? 'white' : 'black'}`}
              >
                {message.text}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View className="flex-row items-center">
        <Input
          className="flex-1 bg-white p-3 rounded-lg border border-gray-300"
          value={input}
          onChangeText={setInput}
          placeholder="Tapez votre message..."
        />
        <Button
          variant="default"
          className="m-2 shadow shadow-foreground/5"
          onPress={sendMessage}
        >
          <Text>Update</Text>
        </Button>
      </View>
    </View>
  );
}
