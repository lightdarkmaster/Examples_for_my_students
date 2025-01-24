void bubbleSort(List<int> list) {
  int n = list.length;
  for (int i = 0; i < n - 1; i++) {
    // Flag to detect if any swapping occurred
    bool swapped = false;

    // Traverse through the unsorted part of the list
    for (int j = 0; j < n - i - 1; j++) {
      if (list[j] > list[j + 1]) {
        // Swap if the element is greater than the next element
        int temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
        swapped = true;
      }
    }

    // If no swapping occurred, the list is already sorted
    if (!swapped) break;
  }
}

void main() {
  List<int> numbers = [64, 34, 25, 12, 22, 11, 90];
  print("Original list: $numbers");
  bubbleSort(numbers);
  print("Sorted list: $numbers");
}
