module example.com/entry

go 1.22.1

replace example.com/greetings => ../greetings

replace example.com/variables => ../variables

replace example.com/refbasiccase => ../refbasiccase

replace example.com/interfacecase => ../interfacecase

replace example.com/methods => ../methods

replace example.com/funcs => ../funcs

replace example.com/standard => ../standard

require example.com/standard v0.0.0-00010101000000-000000000000
