module example.com/entry

go 1.22.1

replace example.com/greetings => ../greetings

replace example.com/variables => ../variables

replace example.com/refbasiccase => ../refbasiccase

replace example.com/interfacecase => ../interfacecase

require (
	example.com/greetings v0.0.0-00010101000000-000000000000
	example.com/interfacecase v0.0.0-00010101000000-000000000000
	example.com/refbasiccase v0.0.0-00010101000000-000000000000
	example.com/variables v0.0.0-00010101000000-000000000000
)
