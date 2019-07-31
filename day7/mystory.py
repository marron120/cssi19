story = """One for {0}
Two for {1}
Three for a girl
And four for a boy
{2} for silver
six for gold
Seven for a secret
Never to be told
Eight for a {3} over the sea
{4} for a lover as true as can be"""

adjective = raw_input ("Enter an adjecive ")
noun1 = raw_input ("Enter a noun ")
number1 = raw_input ("Enter a number as words ")
noun2 = raw_input ("Enter a noun ")
number2 = raw_input ("Enter a number as words ")

print story.format(adjective,noun1,number1,noun2,number2)