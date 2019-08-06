
import webapp2


class MainPage(webapp2.RequestHandler):
    def get(self):
        #self.response.headers['Content-Type'] = 'text/hyml'
        self.response.write('<h1>Hello Marron!</h1>')

class AboutPage(webapp2.RequestHandler):
    def get(self):
        self.response.write ('<h3>this is the about page</h3>')

class NewsPage(webapp2.RequestHandler):
    def get(self):
        self.response.write ('<h3>cssi19 task for the day</h3>')

routes = [("/", MainPage),('/about', AboutPage),('/news', NewsPage)]
app = webapp2.WSGIApplication(routes, debug=True)
