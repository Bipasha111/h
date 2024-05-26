import React from 'react'
import "../html file/Body.css"

const Body = () => {



    const btn = document.querySelector(".SearchBtn");
    const searchBox=document.querySelector(".SearchBox");
    const recipeContainer=document.querySelector(".recipe-container");
    const recipeDetails = document.querySelector(".recipe-details");
    const recipeDetailsbtn = document.querySelector(".recipe-details-btn");
    const recipeDetailsCon = document.querySelector(".recipe-details-con");
    const img1 = document.querySelector(".img1");
    
      
    // btn.addEventListener("click",e=>{
    //     e.preventDefault();
    //     img1.style.display="none"

    //   const searchInput= searchBox.value.trim() ;

    //   if(!searchInput){
    //     recipeContainer.innerHTML=`<h2>Type the meal in the search box</h2>`
    //   }
    
    //   searchrecipe(searchInput);
    // });

    const handleChange =(e)=>{
      e.preventDefault();
          img1.style.display="none"
  
        const searchInput= searchBox.value.trim() ;
  
        if(!searchInput){
          recipeContainer.innerHTML=`<h2>Type the meal in the search box</h2>`
        }
      
        searchrecipe(searchInput);

    }
    
    const searchrecipe= async(query)=>{
        recipeContainer.innerHTML=`<h2 class="block">Fetching Recipes.....................</h2>`

    
             const block = document.querySelector(".block")
       
        
        try{
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const response = await data.json();
        setTimeout(() => {
            block.style.display="none"
        }, 0.1);
        
        response.meals.forEach(meal => {
            const RecipeDiv =document.createElement("div");
            RecipeDiv.classList.add("recipe");
            RecipeDiv.innerHTML=`
            <img src="${meal.strMealThumb}">
            <h3><span>${meal.strMeal}<span></h3>
            <p><span>${meal.strArea}Dise</span></p>
            <p><span>${meal.strCategory}</span></p>
            `
            recipeContainer.appendChild(RecipeDiv);
             const button = document.createElement("button");
             RecipeDiv.appendChild(button);
             button.textContent="View Recipe";

             button.addEventListener("click",(e)=>{
                openRecipe(meal);
             })
            });       

        }catch(error){
            recipeContainer.innerHTML=`<h2 class="block">error Recipes.....................</h2>`
        }


        const openRecipe=(meal)=>{
               recipeDetailsCon.innerHTML=`
                                     <h2 class="recipeName">${meal.strMeal}</h2>
                                        <h3>Ingredents:</h3>
                                        <ul class="IngredientsList">${fetchIngredients(meal)}</ul>
                                        <div class="Intruction">
                                            <h3>Instructions:</h3>
                                            <p>${meal.strInstructions}</p>
                                            </div>
                                         `
                                         
                                        recipeDetailsCon.parentElement.style.display="block" ;
                                     
                                    }
             const fetchIngredients=(meal)=>{
                let IngredientsList="";
                for(let i=1;i<=20;i++){
                                         const ingredient =meal[`strIngredient${i}`];
                                         if(ingredient){
                                                       const measure =meal[`strMeasure${i}`];
                                                       IngredientsList+=`<li>${measure} ${ingredient}</li>`
                                                      } 
                                         else{
                                            break;
                                            }
                                       }
                return IngredientsList;
             }
            
            

         
    }
    const cross=(e)=>{
                   console.log("ho gaya");
                    recipeDetails.style.display="none";
                    }

  return (
    <>
    
  
<div>
 <section>
 <header>
  <h1 className='heading'><span className='m'>Our</span>Recipe</h1> q
  </header>
  <form action>
        <input type="text" className="SearchBox" placeholder="Enter your food recipe" />
        <button type="submit" className="SearchBtn" onClick={handleChange}>Search</button>
      </form> 
  <main>
    <div>
      <div className="img1">
      <nav>

    </nav>
      
        <h2>Search your favourite recipe</h2>
      </div>
      <div className="recipe-container">   
      </div>
      <div className="recipe-details">
        <button className="recipe-details-btn" onclick="cross()">X</button>
        <div className="recipe-details-con" />
      </div>
    </div>
  </main>
 </section>
</div>

    
    </>
  )
}

export default Body
