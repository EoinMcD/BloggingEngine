# frozen_string_literal: true

class Hello
    @name
    def initialize(name)
      @name = name
      
    end
    def findName()
        return @name
    end
    
    

end

puts 'Test'
Eoin = Hello.new('Eoin')
puts Eoin.findName()