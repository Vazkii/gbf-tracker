import requests

def get_content():
	with open('import.js') as f:
		return f.read()

def minify(contents):
	url = 'https://www.toptal.com/developers/javascript-minifier/api/raw'
	res = requests.post(url, data = {'input': contents}, headers = {'content-type': 'application/x-www-form-urlencoded'})
	
	if res.status_code == 200:
		return res.text

def output(contents):
	with open('bookmarklet.js', 'w') as f:
		f.write('javascript:')
		f.write(contents.replace('%', '\\u0025'))

def main():
	content = get_content()
	minified = minify(content)
	output(minified)


if __name__ == '__main__':
	main()