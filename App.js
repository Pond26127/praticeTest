import React from "react";
import RootNavigation from "./navigation";
import { NativeBaseProvider } from 'native-base';

export default function App() {
    return (
        <NativeBaseProvider>
            <RootNavigation />
        </NativeBaseProvider>
    );
}