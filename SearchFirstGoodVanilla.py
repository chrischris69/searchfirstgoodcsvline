# -*- coding: utf-8 -*-
"""
Created on Tue Apr 17 20:08:07 2018

@author: christian marechal

Recherche de la premiere ligne de csv interessante
correspondante a la regularite d un tableau exploitable

"""

import os
path = 'D:/ecomdataforgoodfr/PushMyGIT'
os.chdir(path)


import csv
def readData(fileName):
   f = open(fileName, "r", encoding="utf-8")
   data = f.readlines()
   f.close()
   return data

def readData2(fileName):
   f = open(fileName, "r")
   data = f.readlines()
   f.close()
   return data

#recherche de la premiere regularite dans un ficchier cvs
#csvlignes = premieres lignes d un fichier csv
#limitemax = profondeur maximale de l exploration
#traceon 

#Version Vanilla
import collections

# ne pas appeler directement / subroutine de vanilla2
def searFirstCSVlineGoodVanilla (csvlignes, limitemax, traceon):
    premiereLigne=0
    n = 0
     
    separators = [',',';','\t']
    df = []
    
    frequence= []
    
    # 1) boucle de lecture des premieres lignes
    for ligne in csvlignes: 
        tab = []
        
        for x in separators:        
            co = ligne.count(x)
            tab.append(co)

        frequence.append (tab.index(max(tab)))
        df.append (tab)
        
        n = n + 1
                
        if (n >= limitemax):
            break
    # 2) Analyse du resultat        
    # a-detection du separateur
    
    mx = max(collections.Counter(frequence))
    
    #la colonne qui nous interesse
    df2 = [row[mx] for row in df]        
    df2cout = collections.Counter(df2)
    df2cout2 = df2cout.most_common()
    mymax=0    
    mymaxid=0
    for row in df2cout2 :
        if row[1] >= mymax:
            mymax=row[1]      
            mymaxid=row[0]
    #recherche de la premiere ligne     
    
    i=0
    premiereLigne=0
    bfound1=False
    for row in df2:    
        if (bfound1==True): #a minima deux lignes successives
            if (row==mymaxid) :
                break
            else:
                bfound1=False    
        if (bfound1==False) and (row==mymaxid) :
            premiereLigne=i
            bfound1=True
        i= i+1

    if (traceon):
        print (df)
        spar=[",", ";","tabulation"]
        print("Separateur=["+spar[mx]+"], premiere ligne="+str(premiereLigne))
        
    return (premiereLigne)


def searFirstCSVlineGoodVanilla2 (csvlignes, limitemax, traceon):
    
    cas0=searFirstCSVlineGoodVanilla (csvlignes, limitemax, traceon)
    if (cas0 > 0):
        return (cas0)
    
    #sinon
    n = 0     
    separators = [',',';','\t']
    df = []    
    frequence= []
    
    # 1) boucle de lecture des premieres lignes
    for ligne in csvlignes: 
        tab = []
        
        for x in separators:        
            co = ligne.count(x)
            tab.append(co)

        frequence.append (tab.index(max(tab)))
        df.append (tab)
        
        n = n + 1
                
        if (n >= limitemax):
            break
    # 2) Analyse du resultat        
    
    mx = max(collections.Counter(frequence)) #separateur
    nombre = len (frequence)
    total=0
    n=0
    df2 = []
    
    for ligne in csvlignes: 
        tab = []        
        co = ligne.split (separators [mx])
        co = [x for x in co if x] #remove empty string
        a2 = len (co)
        total = total + a2        
        df2.append (a2)                
        n = n + 1                
        if (n >= limitemax):
            break
    moyenne = round (total / nombre) -1
    premiereLigne=0
    i=0
    bfound1=False

    for x in df2:
        if (bfound1==True): #a minima deux lignes successives
            if (x >= moyenne):
                break
        if (bfound1==False) and (x >= moyenne):
            premiereLigne=i
            bfound1=True
        i= i+1

    if (traceon):
        print (df)
        spar=[",", ";","tabulation"]
        print("Separateur=["+spar[mx]+"], premiere ligne="+str(premiereLigne))
        
    return (premiereLigne)


limitemax=100
traceon=False

csvfile='test.csv'
csvlignes = readData(csvfile)

numero = searFirstCSVlineGoodVanilla2 (csvlignes, limitemax, traceon)
print("Premiere ligne->"+str(numero))

csvfile='test2.csv'
csvlignes = readData2(csvfile)
numero = searFirstCSVlineGoodVanilla2 (csvlignes, limitemax, traceon)
print("Premiere ligne->"+str(numero))
