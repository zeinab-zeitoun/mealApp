import { CATEGORIES } from "../data/dummy-data";
import { View, Text, FlatList } from "react-native";
import CategoriesGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
        navigation.navigate("MealsOverview", {
            categoryId: itemData.item.id
        })
    }
    return (
      <CategoriesGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
