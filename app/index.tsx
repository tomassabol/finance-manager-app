"use client";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Suspense, useMemo, useState } from "react";
import { createCategory } from "~/actions/create-category";
import { RenderCategories } from "~/components/render-categories";
import { LoadingSkeleton } from "~/components/render-categories-skeleton";

export default function Index() {
  const [name, setName] = useState("");
  const [refetchKey, setRefetchKey] = useState(0);
  const categories = useMemo(
    // @ts-expect-error Async Server Component
    () => <RenderCategories key={refetchKey} />,
    [refetchKey]
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, padding: 20 }}>
            <Suspense fallback={<LoadingSkeleton />}>{categories}</Suspense>
          </View>

          <View style={{ padding: 20 }}>
            <View
              style={{
                backgroundColor: "#fff",
                padding: 16,
                borderRadius: 12,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.1,
                shadowRadius: 3,
                elevation: 3,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  color: "#333",
                  marginBottom: 12,
                }}
              >
                Add new category
              </Text>
              <View style={{ gap: 12 }}>
                <TextInput
                  value={name}
                  onChangeText={setName}
                  placeholder="Category name"
                  style={{
                    borderWidth: 1,
                    borderColor: "#ddd",
                    borderRadius: 8,
                    padding: 8,
                    fontSize: 16,
                  }}
                />
                <TouchableOpacity
                  onPress={async () => {
                    "use server";
                    await createCategory(name);
                    setName("");
                    setRefetchKey((prev) => prev + 1);
                  }}
                  style={{
                    backgroundColor: "#007AFF",
                    padding: 12,
                    borderRadius: 8,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ color: "#fff", fontSize: 16, fontWeight: "500" }}
                  >
                    Create Category
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
