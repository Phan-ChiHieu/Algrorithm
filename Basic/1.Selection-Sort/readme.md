# Selection-Sort (Sắp xếp từ nhỏ đến lớn)

## Solution

- lấy từng giá trị trong array so sánh với các giá trị còn lại. Giá trị nhỏ hơn sẽ xếp trước
- Tạo vòng for đầu tiên để lấy ra từng giá trị => đặt trong biến cờ hiệu minIndex
- Tạo vòng for thứ 2 trong vòng for đầu tiên để lấy ra j = i + 1
- so sánh nếu \_arr[minIndex] > \_arr[j] => gán lại minIndex = j
- Sau đó hoán đổi vị trí của 2 phần tử : [\_arr[i], \_arr[minIndex]] = [\_arr[minIndex], \_arr[i]];
- Sau khi hoàn thành return lại \_arr
