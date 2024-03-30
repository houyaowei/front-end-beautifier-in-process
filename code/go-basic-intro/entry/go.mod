module example.com/entry

go 1.21.4

replace example.com/greetings => ../greetings
replace example.com/variables => ../variables

require (
	example.com/greetings v0.0.0-00010101000000-000000000000
	example.com/variables v0.0.0-00010101000000-000000000000
)
