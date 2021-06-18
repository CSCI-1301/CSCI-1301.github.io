 
# Arrays

## Motivation

Arrays are collection, or grouping, of values held in a single place.
They can store multiple values of the same datatype and are useful for...

- when we want to store a collection of related values
- when we don't know in advance how many variables we need

## Declaration and Initialization of Arrays

Structure

- To declare an array, the structure is like so: `<datatype>[] <name> = new <datatype>[];`
- To access a value in an array index, the structure looks like so: `arrayName[index]`
   - An array's **index** (or cell) refers to the location in an array
   - Arrays are **zero-indexed**, or in other words, arrays _start with zero_
- To display the value in an array index, the structure looks like so: `Console.Write(arrayName[index]);`

PLACE VISUAL REPRESENTATION OF ARRAY HERE WITH INDICES 

Declaration and Assignment

```
int[] myArray;
myArray = new int[3]; // 3 is the size declarator
// We can now store 3 ints in this array,
// at index 0, 1 and 2

myArray[0] = 10; // 0 is the subscript, or index
myArray[1] = 20;
myArray[2] = 30;

// the following would give an error:
//myArray[3] = 40;
// Unhandled Exception: System.IndexOutOfRangeException: Index was outside the bounds of the array at Program.Main()
// "Array bound checking": happen at runtime.
```

As usual, we can combine declaration and assignment on one line:

```
int[] myArray = new int[3];
```

We can even initialize _and_ give values on one line:

```
int[] myArray = new int[3] { 10, 20, 30 };
```

And that statement can be rewritten as any of the following:

```
int[] myArray = new int[] { 10, 20, 30 };
int[] myArray = new[] { 10, 20, 30 };
int[] myArray = { 10, 20, 30 };
```

But, we should be careful, the following would cause an error:

```
int[] myArray = new int[5];
myArray = { 1, 2 ,3, 4, 5}; // ERROR
```

If we use the shorter notation, we _have to_ give the values at initialization, we cannot re-use this notation once the array was created.

Other datatype, and even objects, can be stored in arrays:

```
string[] myArray = { "Bob", "Mom", "Train", "Console" };
Rectangle[] arrayOfRectangle = new Rectangle[5];
```

## Custom Size and Values

Not all arrays will be of the same size. How will you create an array best suited for a user? 
Asking the user for the size of the array!

```
Console.WriteLine("What is size of the array that you want?");
int size = int.Parse(Console.ReadLine());
int[] customArray = new int[size];
```

How can we fill it with values, since we do not know its size?
Using iteration!

```
int counter = 0;
while (counter < size)
{
    Console.WriteLine($"Enter the {counter + 1}th value");
    customArray[counter] = int.Parse(Console.ReadLine());
    counter++;
}
```

We can use `Length`, a property of our `array`.
That is, the integer value `myArray.Length` is the length (= size) of the array, we can access it directly.

To display an array, we need to iterate as well (this time using the `Length` property):

```
int counter2 = 0;
while (counter2 < customArray.Length)
{
    Console.WriteLine($"{counter2}: {customArray[counter2]}.");
    counter2++;
}
```


## Changing the Size

`Array` is actually a class, and it comes with methods!

```
Array.Resize(ref myArray, 4);
myArray[3] = 40;
Array.Resize(ref myArray, 2);
```

`Resize` can shrink and extend an array!
- If an array is shrunk, the contents that do not fit in the new size is lost 
- If an array is extended, the new spaces in the array are filled with the default value (for int, it is $0$)
