import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="register" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="verify-email-register" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="create-passcode" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="confirm-passcode" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="create-username" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="login" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="forgot-password" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="verify-email" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="create-new-password" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="success" 
        options={{ headerShown: false }} 
      />
    </Stack>
  );
}
