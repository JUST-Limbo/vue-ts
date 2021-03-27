interface FullName {
  firstName: string;
  secondName: string;
}

function func(name: FullName): void {
  console.log(name)
}
func({ firstName: '1', secondName: '123' })
