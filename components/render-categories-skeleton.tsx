import { ScrollView, View, Text } from "react-native";

export function LoadingSkeleton() {
  return (
    <View style={{ padding: 16, gap: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "#333" }}>
        Categories
      </Text>
      <ScrollView
        style={{ gap: 12 }}
        contentContainerStyle={{ gap: 12 }}
        showsVerticalScrollIndicator={false}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <View
            key={index}
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
              height: 50,
            }}
          >
            <View
              style={{
                width: "60%",
                height: 20,
                backgroundColor: "#f0f0f0",
                borderRadius: 4,
              }}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
