# -*- coding: utf-8 -*-
"""
Created on Tue Apr 17 20:08:07 2018

@author: christian marechal

Recherche de la premiere ligne de csv interessante
correspondante a la regularite d un tableau exploitable

"""

import os
import csv

path = 'D:/ecomdataforgoodfr/PushMyGIT'
os.chdir(path)


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


def moyenf(tableau):
    return sum(tableau, 0.0) / len(tableau)

def variance(tableau):
    m=moyenf(tableau)
    return moyenf([(x-m)**2 for x in tableau])

#Version Vanilla
import collections

"""Premiere methode par comptage des separateurs
   retourne :
       - le numero de la premiere ligne pour cette methode
       - le separateur detecte
"""
def _searFirstCSVlineGoodVanilla (csvlignes, limitemax, traceon):
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
    nombre = len (frequence)
    
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

    if (False and traceon):
        print (df)
        spar=[",", ";","tabulation"]
        print("Separateur=["+spar[mx]+"], premiere ligne="+str(premiereLigne))
        
    return ([premiereLigne, mx, nombre])


#Seconde methode, commence par appeler la premiere
def searFirstCSVlineGoodVanilla2 (csvlignes, limitemax, traceon):
    
    #Calcul methode 1
    result=_searFirstCSVlineGoodVanilla (csvlignes, limitemax, traceon)
    Metod1= result[0] # numero de la peremiere lgne
    mx    = result[1] # separateur detecte
    nombre= result[2] # nombre
    n = 0     
    separators = [',',';','\t']
    
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

    varianceDF2= variance(df2)
    
    #print("cas0="+str(cas0))
    #print("moyenne="+str(moyenne))
    #print ("variance(df2)="+str(variance(df2)))
    
    for x in df2:
        if (bfound1==True): #a minima deux lignes successives
            if (x >= moyenne):
                break
        if (bfound1==False) and (x >= moyenne):
            premiereLigne=i
            bfound1=True
        i= i+1
     
    #Decision entre les 2 methodes 
    first = Metod1
    MM ="m1"
    if (varianceDF2 < moyenne): #methode 2
        first = premiereLigne
        if (traceon):
            MM ="m2"
    else:
        if Metod1 == 0:
            first = premiereLigne
            if (traceon):
                MM ="m2"

    if (traceon):        
        print ("->"+MM)
        spar=[",", ";","tabulation"]
        #print("Separateur=["+spar[mx]+"], premiere ligne="+str(first))
                    
    return (first)


def Testing ():
    limitemax=100
    traceon=True
    
    csvfile='test.csv' #OK
    csvlignes = readData(csvfile)
    
    numero = searFirstCSVlineGoodVanilla2 (csvlignes, limitemax, traceon)
    print("Premiere ligne->"+str(numero))
    print("BON = 4, methode 1,  V>" )
    
    csvfile='test2.csv' #OK
    csvlignes = readData2(csvfile)
    numero = searFirstCSVlineGoodVanilla2 (csvlignes, limitemax, traceon)
    print("Premiere ligne->"+str(numero))
    print("BON = 5, methode 2,  V>" )
    
    csvfile='OPENDATA41_Decheteries_TonnagesCollectes_Loir-et-Cher.csv'
    csvlignes = readData2(csvfile)
    numero = searFirstCSVlineGoodVanilla2 (csvlignes, limitemax, traceon)
    print("Premiere ligne->"+str(numero))
    print("BON = 4, method 2, V <")
    
    csvfile='test3.csv' #OK
    csvlignes = readData2(csvfile)
    numero = searFirstCSVlineGoodVanilla2 (csvlignes, limitemax, traceon)
    print("Premiere ligne->"+str(numero))
    print("BON = 7, method 2, V <")
    
    csvfile='test4.csv' #OK
    csvlignes = readData2(csvfile)
    numero = searFirstCSVlineGoodVanilla2 (csvlignes, limitemax, traceon)
    print("Premiere ligne->"+str(numero))
    print("BON = 0, method 1, V =0")
    
    
    #AVOIR AVOIR AVOIR AVOIR 
    csvfile='epn_balnode2017022109224716amconmajag7346_2017-12-12.csv'
    csvlignes = readData2(csvfile)
    numero = searFirstCSVlineGoodVanilla2 (csvlignes, limitemax, traceon)
    print("Premiere ligne->"+str(numero))
    print("BON = 0, method 2, V =0.01 < M")
    
    #PAS TRES BON
    csvfile='D_Tableau 8.csv'
    csvlignes = readData2(csvfile)
    numero = searFirstCSVlineGoodVanilla2 (csvlignes, limitemax, traceon)
    print("Premiere ligne->"+str(numero))
    print("BON = 0, method 2, V  < M")
    
    csvfile='D_Annexe CER 2013.csv'
    csvlignes = readData2(csvfile)
    numero = searFirstCSVlineGoodVanilla2 (csvlignes, limitemax, traceon)
    print("Premiere ligne->"+str(numero))
    print("BON = 0, method 2, V  < M")
