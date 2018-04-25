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

csvfile='test.csv'
csvlignes = readData(csvfile)

#recherche de la premiere regularite dans un ficchier cvs
#csvlignes = premieres lignes d un fichier csv
#limitemax = profondeur maximale de l exploration
#traceon 

#Version Vanilla
import collections

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

limitemax=20
traceon=True

numero = searFirstCSVlineGoodVanilla (csvlignes, limitemax, traceon)
print("Premiere ligne->"+str(numero))

numero = searFirstCSVlineGoodVanilla (csvlignes, limitemax, False)
print("Premiere ligne->"+str(numero))
