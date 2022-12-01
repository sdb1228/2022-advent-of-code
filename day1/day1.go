package main

import (
	"fmt"
	"os"
)

func main() {
	fmt.Printf("\n\n*****  DAY ONE  *****\n\n")

	f, err := os.Open("input.txt")
	if err != nil {
		fmt.Printf("can't open f")
	}
	defer f.Close()

	largestSum := [3]int{0, 0, 0}
	var currentSum int
	for {
		var value int
		_, err = fmt.Fscanln(f, &value)
		if err != nil {
			fmt.Printf("file scanner borked")
			break
		}
		if value == 0 {
			if currentSum > largestSum[0] {
				largestSum[2] = largestSum[1]
				largestSum[1] = largestSum[0]
				largestSum[0] = currentSum
				currentSum = 0
				continue
			}
			if currentSum > largestSum[1] {
				largestSum[2] = largestSum[1]
				largestSum[1] = currentSum
				currentSum = 0
				continue
			}
			if currentSum > largestSum[2] {
				largestSum[2] = currentSum
				currentSum = 0
				continue
			}
			currentSum = 0
		}
		currentSum += value
	}
	fmt.Println("\n", largestSum)
}
