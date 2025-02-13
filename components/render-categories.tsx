"use server";
import "server-only";

import { Suspense } from "react";
import { ScrollView, Text, View } from "react-native";
import { db } from "~/utils/db";
import { LoadingSkeleton } from "./render-categories-skeleton";

export type Category = {
  id: number;
  name: string;
  createdat: string;
};

export async function RenderCategories(props: { key?: number }) {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      {/* @ts-expect-error Async Server Component */}
      <Categories key={props?.key} />
    </Suspense>
  );
}

async function Categories(props: { key?: number }) {
  const { rows: categories } = await db.query<Category>(
    "SELECT * FROM categories ORDER BY createdat DESC"
  );

  if (!categories?.length) {
    return (
      <View style={{ padding: 16, gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "#333" }}>
          Categories
        </Text>
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
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 16, color: "#666", fontWeight: "500" }}>
            No categories found
          </Text>
        </View>
      </View>
    );
  }

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
        {categories.map(({ id, name }) => (
          <View
            key={id}
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
            <Text style={{ fontSize: 16, fontWeight: "500", color: "#333" }}>
              {name}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
