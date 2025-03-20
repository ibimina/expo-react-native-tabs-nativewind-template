import { useContext, createContext, useState, ReactNode } from "react";
import { Text, SafeAreaView } from "react-native";

interface AuthContextType {
    session: boolean;
    user: boolean;
    signin: () => Promise<void>;
    signout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [session, setSession] = useState<boolean>(false);
    const [user, setUser] = useState<boolean>(false);

    const signin = async (): Promise<void> => {};
    const signout = async (): Promise<void> => {};

    const contextData: AuthContextType = { session, user, signin, signout };

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? (
                <SafeAreaView>
                    <Text>Loading..</Text>
                </SafeAreaView>
            ) : (
                children
            )}
        </AuthContext.Provider>
    );
};

const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

export { useAuth, AuthContext, AuthProvider };
