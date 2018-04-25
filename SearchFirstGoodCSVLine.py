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
import pandas as pd
def searFirstCSVlineGood (csvlignes, limitemax, traceon):
    premiereLigne=0
    n = 0
     
    separators = [',',';','\t']
    
    lesTroisColonnes = ['A','B', 'C']
    df = pd.DataFrame(columns=lesTroisColonnes)
    
    frequence =pd.DataFrame(columns=['D'])
    
    # 1) boucle de lecture des premieres lignes
    for ligne in csvlignes: 
        tab = []
        
        for x in separators:        
            co = ligne.count(x)
            tab.append(co)

        frequence.loc[n] = tab.index(max(tab))
            
        df.loc[n] =tab
        n = n + 1
                
        if (n >= limitemax):
            break
    # 2) Analyse du resultat        
    # a-detection du separateur
    frequence['nombre']= frequence.groupby('D')['D'].transform('count')
    mx = max(frequence['nombre'])
    Sepp = 0
    for index, row in frequence.iterrows():    
        if (row['nombre']==mx):
            Sepp=row['D'] # on prend le dernier
    df['nombre']= df.groupby(lesTroisColonnes[Sepp])[lesTroisColonnes[Sepp]].transform('count')
    mx = max(df['nombre'])
    # b- determination de la premiere ligne 
    for index, row in df.iterrows():    
        if (row['nombre']==mx):
            premiereLigne=index # choix de ka premiere ligne
            break
    if (traceon):
        print (df)
        spar=[",", ";","tabulation"]
        print("Separateur=["+spar[Sepp]+"], premiere ligne="+str(premiereLigne))
        #print(">>"+csvlignes[premiereLigne])
        
    return (premiereLigne)

limitemax=20
traceon=True

numero = searFirstCSVlineGood (csvlignes, limitemax, traceon)
print("Premiere ligne->"+str(numero))
