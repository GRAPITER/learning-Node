function calculation(num1, num2) {
  try {
    if (num2 === 0) {
      throw new Error("num2 cannot be 0 ");
    }
    return num1 + num2;
  } catch (error) {
    console.log("erroe", error);
  }
}

async function sending() {
  console.log(await calculation(20, 30));
  console.log(await calculation(20, 1));
}

console.log("hallo");
sending();
