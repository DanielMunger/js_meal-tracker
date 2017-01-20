import { Pipe, PipeTransform } from '@angular/core';
import { Food } from './food.model';

@Pipe({
  name: "mealtype",
  pure: false
})

export class MealFilterPipe implements PipeTransform {

  transform(input: Food[], selector)
  {
    var output: Food[] = [];
    if(selector==="All")
    {
      for(var i =0; i<input.length; i++)
      {
        output.push(input[i]);
      }
    }
    if(selector === "Breakfast")
    {
      for(var i =0; i<input.length; i++)
      {
        if(input[i].meal==="Breakfast")
        {
          output.push(input[i]);
        }
      }
    } else if(selector === "Lunch")
    {
      for(var i =0; i<input.length; i++)
      {
        if(input[i].meal==="Lunch")
        {
          output.push(input[i]);
        }
      }
    } else if(selector === "Dinner")
    {
      for(var i =0; i<input.length; i++)
      {
        if(input[i].meal==="Dinner")
        {
          output.push(input[i]);
        }
      }
    } else if(selector === "Snack")
    {
      for(var i =0; i<input.length; i++)
      {
        if(input[i].meal==="Snack")
        {
          output.push(input[i]);
        }
      }
    } else if(selector === "Dessert")
    {
      for(var i =0; i<input.length; i++)
      {
        if(input[i].meal==="Dessert")
        {
          output.push(input[i]);
        }
      }
    } else if(selector === "Low")
    {
      for(var i =0; i<input.length; i++)
      {
        if(input[i].calories<=275)
        {
          output.push(input[i]);
        }
      }
    } else if(selector === "Average")
    {
      for(var i =0; i<input.length; i++)
      {
        if(input[i].calories>275 && input[i].calories<=515)
        {
          output.push(input[i]);
        }
      }
    } else if(selector === "High")
    {
      for(var i =0; i<input.length; i++)
      {
        if(input[i].calories>515)
        {
          output.push(input[i]);
        }
      }
    }
    return output;
  }
}
